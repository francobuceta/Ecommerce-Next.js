"use client";
import SocialIcons from "./SocialIcons";
import { useForm } from "react-hook-form";
import { postRequest } from "@/services/clientFetching";

function RegisterForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const response = await postRequest("/user/register", data);
    console.log(response);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex flex-col px-12 h-full justify-center items-center text-center"
    >
      <h1 className="font-bold font-main text-4xl">Crear Cuenta</h1>
      <SocialIcons />
      <span className="text-sm">o usá tu email para registrarte</span>
      <input type="text" placeholder="Nombre" {...register("firstName")} />
      <input type="text" placeholder="Apellido" {...register("lastName")} />
      <input type="email" placeholder="Email" {...register("email")} />
      <input
        type="password"
        placeholder="Contraseña"
        {...register("password")}
      />
      <button
        type="submit"
        className="rounded-[20px] bg-custome-primary text-base text-custome-secondary font-bold py-2 px-11 mt-3 transition-transform duration-[80ms] ease-in active:scale-[0.95]"
      >
        REGISTRARSE
      </button>
    </form>
  );
}

export default RegisterForm;
