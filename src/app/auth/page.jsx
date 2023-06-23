"use client";
import { useState } from "react";
import SocialIcons from "@/components/auth/SocialIcons";
import useMediaQuery from "@/hooks/useMediaQuery";

const Auth = () => {
  const [isClicked, setIsClicked] = useState(false);
  const isMobile = useMediaQuery("(min-width: 640px)");

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className="flex justify-center mt-16 mb-16 sm:mb-0 height-[100vh]">
      <div
        className={`${isMobile ? "container" : "container-mobile" } ${isClicked ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className={`${isMobile ? "form-container sign-up-container" : "form-container-mobile sign-up-container-mobile"}`}>
          <form
            action="#"
            className="bg-white flex flex-col px-12 h-full justify-center items-center text-center"
          >
            <h1 className="font-bold">Create Account</h1>
            <SocialIcons />
            <span className="text-xs">or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className={`${isMobile ? "form-container sign-in-container" : "form-container-mobile sign-in-container-mobile"}`}>
          <form
            action="#"
            className="bg-white flex flex-col px-12 h-full justify-center items-center text-center"
          >
            <h1 className="font-bold">Sign in</h1>
            <SocialIcons />
            <span className="text-xs">or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className={`${isMobile ? "overlay-container" : "overlay-container-mobile"}`}>
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="font-bold">Welcome Back!</h1>
              <p className="text-sm my-5">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={handleClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="font-bold">Hello, Friend!</h1>
              <p className="text-sm my-5">
                Enter your personal details and start journey with us
              </p>
              <button className="ghost" id="signUp" onClick={handleClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
