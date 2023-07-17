"use client";
import LoginForm from "@/components/auth/LoginForm";
import { useState } from "react";
import RegisterForm from "@/components/auth/RegisterForm";

const Auth = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className="flex justify-center mt-12 mb-16 height-[100vh]">
      <div
        className={`container-auth ${
          isClicked ? "right-panel-active" : ""
        }`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <RegisterForm />
        </div>
        <div className="form-container sign-in-container">
          <LoginForm />
        </div>
        <div
          className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="font-bold font-main text-4xl">¡Bienvenido De Nuevo!</h1>
              <p className="text-base my-5">
                Para seguir conectado con nosotros ingresá tu información personal
              </p>
              <button
                className="rounded-[20px] border border-solid border-white bg-transparent text-base text-lightblack font-bold py-2 px-11 transition-transform duration-[80ms] ease-in active:scale-[0.95]"
                id="signIn"
                onClick={handleClick}
              >
                INGRESAR
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="font-bold font-main text-4xl">¡Hola, Amigo!</h1>
              <p className="text-base my-5">
                Ingresá tus datos personales y comenzá tu viaje con nosotros
              </p>
              <button
                className="rounded-[20px] border border-solid border-white bg-transparent text-base text-lightblack font-bold py-2 px-11 transition-transform duration-[80ms] ease-in active:scale-[0.95]"
                id="signUp"
                onClick={handleClick}
              >
                REGISTRARSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
