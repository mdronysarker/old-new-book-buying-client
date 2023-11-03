//import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Flex from "../components/layout/Flex";
import { useState } from "react";
import { TbEyeOff } from "react-icons/tb";
import { TbEye } from "react-icons/tb";
import { useFormik } from "formik";
import { Signin } from "../validation";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [showPass, setShowPass] = useState("password");
  const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

  const handleShowPass = () => {
    showPass === "password" ? setShowPass("text") : setShowPass("password");
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Signin,
    onSubmit: () => {
      console.log("done");
      signInUser(formik.values.email, formik.values.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
      formik.resetForm();
    },
  });

  return (
    <div className="max-w-container mx-auto p-2.5 mt-12">
      <Flex className="flex g items-center ap-7">
        <div className="w-[48%]">
          <img src="images/login.png" alt="regtration" />
        </div>
        <div className="w-[48%]">
          <div>
            <h2 className="font-dm font-bold text-[34px] text-[#11175d] ">
              Login To Your Account!
            </h2>
            <div className="flex border border-[#03014c] py-3 px-2 rounded-lg cursor-pointer items-center w-[50%] mt-5">
              <img src="images/google.png" alt="google-pic" />
              <p className="font-dm font-regular ml-[12px]">
                Login with Google
              </p>
            </div>
            <form onSubmit={formik.handleSubmit} className="mt-7">
              <h4 className="placeholder:font-regular mb-2.5 font-dm text-base font-bold placeholder:font-dm placeholder:text-sm placeholder:text-[#767676]">
                Email
              </h4>
              <input
                placeholder="Email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="w-full resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0 mb-6"
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="text-[#cd0404] mb-5">{formik.errors.email}</p>
              ) : (
                ""
              )}

              <div className="relative">
                <h4 className="placeholder:font-regular mb-2.5 font-dm text-base font-bold placeholder:font-dm placeholder:text-sm placeholder:text-[#767676]">
                  Password
                </h4>
                <input
                  placeholder="Password"
                  name="password"
                  type={showPass}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="w-full resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0 mb-6"
                />
                {formik.errors.password && formik.touched.password ? (
                  <p className="text-[#cd0404] mb-5">
                    {formik.errors.password}
                  </p>
                ) : (
                  ""
                )}
                <div
                  onClick={handleShowPass}
                  className="absolute cursor-pointer top-[50%] right-0 translate-y-[-50%]"
                >
                  {showPass === "password" ? (
                    <TbEye className="w-[45px] h-6" />
                  ) : (
                    <TbEyeOff className="w-[45px] h-6" />
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="bg-primary py-4 px-24 font-dm text-sm font-bold text-white  border  hover:text-primary hover:bg-white hover:border hover:border-primary"
              >
                SIGN IN
              </button>
            </form>
            <div className="mt-4">
              <p className="font-dm font-blod text-[16px] ">
                Don't have an account ?{" "}
                <Link className="text-[#ea6c00]" to="/registration">
                  Sign UP
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default Login;
