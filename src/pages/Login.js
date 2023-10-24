/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import TextInput from "../components/InputContainer";
import login from "../assets/Images/login.png";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = (e) => {
    setIsLogin(e);
  };

  return (
    <section className="mt-4 max-w-[800px] m-4 mx-auto px-10 shadow-2xl  rounded-xl">
      <div className="container">
        <div className="g-6 flex h-2/4 flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src={login} className="w-full" alt="Phone image" />
          </div>
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <div className="text-center mt-10">
              <h4 className="mb-12 mt-1 pb-1 text-xl">
                {isLogin ? "Login" : "Sign Up"}
              </h4>
            </div>

            <form>
              {isLogin ? (
                <div className="mt-10">
                  <TextInput
                    placeholder="Enter the Mobile Number"
                    containerClass="border rounded-md border-yellow shadow-xl"
                    customClasses="px-4 py-2 w-3/4 outline-none rounded-md"
                    CustomebuttonClasses="bg-yellow w-3/12 px-4 rounded-md text-black "
                    titleClass="font-sans text-4 font-normal"
                    labelClassname="text-black"
                  />
                </div>
              ) : (
                <div className="mt-10">
                  <TextInput
                    placeholder="Enter Your Name"
                    containerClass="border rounded-md border-yellow shadow-xl"
                    customClasses="px-4 py-2 w-3/4 outline-none rounded-md"
                    CustomebuttonClasses="bg-yellow w-3/12 px-4 rounded-md text-black "
                    titleClass="font-sans text-4 font-normal"
                    labelClassname="text-black"
                  />
                  <TextInput
                    placeholder="Enter Email Address"
                    containerClass="border rounded-md border-yellow"
                    customClasses="px-4 py-2 w-3/4 outline-none rounded-md shadow-xl"
                    CustomebuttonClasses="bg-yellow w-3/12 px-4 rounded-md text-black "
                    titleClass="font-sans text-4 font-normal"
                    labelClassname="text-black"
                  />
                  <TextInput
                    placeholder="Enter Phone Number"
                    containerClass="border rounded-md border-yellow"
                    customClasses="px-4 py-2 w-3/4 outline-none rounded-md shadow-xl"
                    CustomebuttonClasses="bg-yellow w-3/12 px-4 rounded-md text-black "
                    titleClass="font-sans text-4 font-normal"
                    labelClassname="text-black"
                  />
                </div>
              )}

              <div className="mb-6 flex items-center justify-between"></div>

              <button
                type="button"
                // onClick={()=>toggleLogin()}
                className="inline-block w-full rounded bg-yellow px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                {isLogin ? "Sign In" : "Sign Up"}
              </button>
              {isLogin ? (
                <div className="my-4 flex items-center justify-center ">
                  <h1 className=" mb-0 text-center  dark:text-neutral-200">
                    Don't have an account?
                  </h1>
                  <button
                    type="button"
                    onClick={() => toggleLogin(false)}
                    className="mb-0 text-center  dark:text-neutral-200 text-blue_dark"
                  >
                    Sign up
                  </button>
                </div>
              ) : (
                <div className="my-4 flex items-center justify-center ">
                  <h1 className=" mb-0 text-center  dark:text-neutral-200">
                    Already have an account?
                  </h1>
                  <button
                    type="button"
                    onClick={() => toggleLogin(true)}
                    className="mb-0 text-center  dark:text-neutral-200 text-blue_dark"
                  >
                    Sign In
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
