"use client";
import SocialIcons from "./SocialIcons";
import { useForm } from "react-hook-form";
import { postRequest } from "@/services/clientFetching";

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const response = await postRequest("/user/login", data);
    console.log(response);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex flex-col px-12 h-full justify-center items-center text-center"
    >
      <h1 className="font-bold font-main text-4xl">Ingresar</h1>
      <SocialIcons />
      <span className="text-sm">o ingresá con tu email</span>
      <input {...register("email")} type="email" placeholder="Email" />
      <input
        {...register("password")}
        type="password"
        placeholder="Contraseña"
      />
      <button
        type="submit"
        className="rounded-[20px] bg-custome-primary text-base text-custome-secondary font-bold py-2 px-11 mt-7 transition-transform duration-[80ms] ease-in active:scale-[0.95]"
      >
        INGRESAR
      </button>
    </form>
  );
}

export default LoginForm;
