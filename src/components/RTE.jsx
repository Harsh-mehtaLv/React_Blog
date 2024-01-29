import React from "react";
import { Editor } from "@tinymce/tinymce-react"; // 1 import editor
import { Controller } from "react-hook-form"; // 2 import Controller
// 3 control jo ki iss components se control dusre component me pass karega jo bhi component isko call karega usme
export default function RTE  ({ name, control, lable, defaultValue = "" })  {
  return (
    <div className="w-full">
      {/* 4 give lable */}
      {lable && <lable className="inline-block mb-1 pl-1"></lable>}

      {/* 5 control ko use krne ka method. Controller yaha se apka control dusre component me pass krta hai. isme aap   */}
      <Controller
        name={name || "content"}
        control={control} // control dene k liye
        // elements kaise render krte hai. isme field pe tracking jo bhi event ki lagani hai vi {} isme lgate hai. ki is field me change hone pe inporm me
        render={({ field: { onChange } }) => (
          // ab yaha e hume jo bhi element render krvana hai vo do
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        //   Ab is Editor ka control kaise lete hai for that make Post-form folder and isme 'PostForm.jsx' file bnao
        )}
      />
    </div>
  );
};
