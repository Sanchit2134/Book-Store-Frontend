import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Login from "./Login";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userinfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successful");
          localStorage.setItem("User", JSON.stringify(res.data.user));
          navigate(from, { replace: true });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          document.getElementById("my_modal_3").close(); // Consider managing this with React state
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
            <h3 className="font-bold text-lg">Sign Up</h3>
            {/* Username */}
            <div className="mt-4 space-y-2">
              <div>Username</div>
              <input
                type="text"
                placeholder="Enter Your Username"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <div>Email</div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <div>Password</div>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-200"
                type="submit"
              >
                Sign Up
              </button>
              <p>
                Have an Account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
