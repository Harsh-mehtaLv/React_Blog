import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin, login } from "../../store/authSlice"; // is Login ka hum name yaha pe change bhi kr skte hai. ab ye yaha pe authLogin ke name se use hoga
import { Button, Input, Logo } from "./index";
import authService from "../appwrite/auth_service";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Login = () => {
  // servivces jo hum use karenge
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => { // error solved spelling mistake in login
    setError("");
    try {
      const session = await authService.login(data);
      // ab if session hai to user logged in hai agar nahi hai to nahi hai
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        // ab jab login ho gaya hai to usko navigate kr do route pr navigate s ehum automatically user ko kahi aur send kr skte hai
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        {/* logo here */}
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        {/* sign in heading */}
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        {/*  links and pera */}
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {/* error display */}
        {error && <p className="text-red-600 mt-8 text-center">{error} </p>}

        {/* form starts */}
        {/* handleSubmit yaha pe ek method hai  */}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            {/* input component using here email input */}
            {/* ab placeholder to humne diya hi nahi hai input component me but humne props apread kiya hai means baki ke jitne bhi props user add krta hai unko display kr do yaha pe */}
            <Input
              lable="Email: "
              placeholder="Enter your email"
              type="email"
              // ye ...regester js humko jaha pe bhi hum input field bnayenge select ho ya koi bhi ho yaha pe humko ue likhna hai kyuki hum react-form-hook use kr rahe hai. ...regester syntex hai it is important
              // ye key value hai ab isme hum options pass krte hai
              {...register("email", {
                // first option required hai
                required: true,
                // second option hai patern validate iska name hai. validate me aap object pass kr skte ho and uske andar app de sktre ho ki konsa patern matchg krna hai Ab matchPatern me (value) jati hai. iss ajeeb patern ko 'regex' 'regular expression' bolte hai Isko app use krne k liye "regxr.com" website pe ajke email validaion search kr skte hai  yaha se aap regular expression le skte hai. ye email highlight ho rha hai ya nahi vo express krta hai.  Ye pur apatern slashes me ligha jata hai. Iske baad ap .test(value) for value bolte hai to app ne upat jo bhi value ka name diya hia vahi name yaha bhi dedo. To jo bhi value mili hia iss expression ke sath test ho rahi hai to theek hai nahi to agar nahi ho rahi to iske baad || ek or lagta hai aur yaha pe mail should be valid aat ahai. and ye info react-form-hook ke apply validation se aaya hai
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            {/* input for password using same component or input */}
            <Input
              lable="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                // object pass krna optional hai
                required: true, // iske baad aap validate bhi pass kr skte hai
              })}
            />

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// handleSubmit and regester are events in react-form-hook
