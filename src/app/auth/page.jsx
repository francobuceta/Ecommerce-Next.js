"use client";
import SocialIcons from "@/components/auth/SocialIcons";
import { useState } from "react";

const Auth = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className="font-sans flex justify-center mt-16 height-[100vh]">
      <div
        className={`container ${isClicked ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
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
        <div className="form-container sign-in-container">
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
        <div className="overlay-container">
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
