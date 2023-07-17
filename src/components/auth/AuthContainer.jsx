"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Overlay from "./Overlay";

const AuthContainer = () => {

  const [overlayClass, setOverlayClass] = useState(false);

  return (
    <div className={`container-auth ${overlayClass ? "right-panel-active" : ""}`}
      id="container-auth"
      >
      <div className="form-container sign-up-container">
        <RegisterForm />
      </div>
      <div className="form-container sign-in-container">
        <LoginForm />
      </div>
      <div className="overlay-container">
        <Overlay overlayClass={overlayClass} setOverlayClass={setOverlayClass} />
      </div>
    </div>
  );
};

export default AuthContainer;
