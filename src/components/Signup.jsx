import React, { useState } from "react";
import authService from "../appwrite/auth_service";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  // Ab login ki tarha ek method banega
  const create = async (data) => {
    setError(""); // yaha ep sabse pehle error empty krte hai
    try {
      const userData = await authService.createAccount(data);
      if (userData) dispatch(login(userData)); // ab data mil gaya hai to forcefully navigate kr do
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        {/* logo here */}
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        {/* ye sara login.jsx se copy kr lo */}
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to your account
        </h2>
        {/*  links and pera */}
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {/* error display krvana*/}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        {/* ab form yaha pe like last time */}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            {/* name ka input */}
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />

            {/* email ka input copy from login.jsx */}
            <Input
              lable="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            {/* password ka input */}
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />

            {/* button component */}
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
