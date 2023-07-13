"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postRequest } from "@/services/clientFetching";
import SocialIcons from "@/components/auth/SocialIcons";
import useMediaQuery from "@/hooks/useMediaQuery";

const Auth = () => {
  const [isClicked, setIsClicked] = useState(false);
  const isMobile = useMediaQuery("(min-width: 640px)");
  const { register, handleSubmit } = useForm();

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const onSubmit = async (data) => {
    const response = await postRequest("/user/login", data);
    console.log(response);
  }

  return (
    <section className="flex justify-center mt-16 mb-16 height-[100vh]">
      <div
        className={`${isMobile ? "container" : "container-mobile"} ${
          isClicked ? "right-panel-active" : ""
        }`}
        id="container"
      >
        <div
          className={`${
            isMobile
              ? "form-container sign-up-container"
              : "form-container-mobile sign-up-container-mobile"
          }`}
        >
          <form
            action="#"
            className="bg-white flex flex-col px-12 h-full justify-center items-center text-center"
          >
            <h1 className="font-bold font-main text-4xl">Crear Cuenta</h1>
            <SocialIcons />
            <span className="text-sm">o usá tu email para registrarte</span>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit" 
              className="rounded-[20px] bg-custome-primary text-base text-custome-secondary font-bold py-2 px-11 mt-3 transition-transform duration-[80ms] ease-in active:scale-[0.95]">
              REGISTRARSE
            </button>
          </form>
        </div>
        <div
          className={`${
            isMobile
              ? "form-container sign-in-container"
              : "form-container-mobile sign-in-container-mobile"
          }`}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white flex flex-col px-12 h-full justify-center items-center text-center"
          >
            <h1 className="font-bold font-main text-4xl">Ingresar</h1>
            <SocialIcons />
            <span className="text-sm">o ingresá con tu email</span>
            <input {...register("email")} type="email" placeholder="Email" />
            <input {...register("password")} type="password" placeholder="Contraseña" />
            <button type="submit"
              className="rounded-[20px] bg-custome-primary text-base text-custome-secondary font-bold py-2 px-11 mt-7 transition-transform duration-[80ms] ease-in active:scale-[0.95]">
              INGRESAR
            </button>
          </form>
        </div>
        <div
          className={`${
            isMobile ? "overlay-container" : "overlay-container-mobile"
          }`}
        >
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
