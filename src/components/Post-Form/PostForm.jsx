import React, { useCallback, useEffect } from "react"; // Ab yaha pe ye sab import kro
import { useForm } from "react-hook-form"; // this
import { Button, Input, Select, RTE } from "../index"; // and this too
import appwriteService from "../../appwrite/config"; // kyuki data collect kr ke sent vaha pe krna hai
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostForm = ({ post }) => {
  // hume useForm se info chahiye ki jab bhi hum form use karenge hume aise hi info chahiaye. ye hume kafi info det ahai depends jo hume use krna hai. ye hume kisi field ko monitor krne k liye watching capability bhi dete hai watch me setValue bhi deta hai control bhi deta hai yehi control hum RTE me denge to waha se hume control mil jayega . getValues jitne bhi forms ki hume values grab krni hai vo hume ye yaha deta hai
  const { register, handleSubmit, watch, setValue, control,getValues } = useForm({
    // yaha pe aap object bhi pass kr skte hai and usmr values de skte hai
    defaultValues: {
      // ye sari default values ha jo hum use karenge
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active", // error solver ? was not there
    },
  });

  const navigate = useNavigate();
  // user data lene k liye
  const userData = useSelector((state) => state.auth.userData);

  // agar user na form submit kr diya hai to kya kro. form submit hone pe usne data psss kiya hoga.
  // ab hum submit nam ka form bnate hai ki kya kya kis tarha se kaam karega.
  //  ab two things hai ya to post ki value hai already ya nahi hai if hai to update kro if nah hai to new entry bnao

  // post hai
  const submit = async (data) => {
    // if post hai to update kro
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      // ab file aa gai hai to purani imagedelete bhi kro
      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      // update me data dena
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      // ab post aane pe user ko navigate kra do
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
      //   post nahi hai
      else {
        const file = await appwriteService.updateFile(data.image[0]);
        if (file) {
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = await appwriteService.createPost({
            ...data,
            userId: userData.$id,
          });
          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        }
      }
    }
  };

  // slug transform interview cracker method. ye kya krta hai ki hmare paas do input fields hai ek title and second slug title ko watch krna hai and slug me value generate krni hai. Agar kahi pe bhi user space deta hai to usko - dash em convert krna hai . vo hum regex se kr lenge abhi hum isko basic functionality likhebge kis tarha se watch hota hai vo useEffect me jayega kyuki waha pe dependencies chnage ho rhi hai
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, "_")
        .replace(/\s/g, "_");
    }
    return "";
  }, []);

  //  iss method ko use kaise krna hai
  useEffect(() => {
    const subscription = watch((value, name) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]); // watch ki huminput me use karenge

  return (
    // copy paste kro ok
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
