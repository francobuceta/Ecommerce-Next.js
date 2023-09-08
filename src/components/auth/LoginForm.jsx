"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postRequest } from "@/services/clientFetching";
import { setUserInStore } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
import { errorNotification } from "@/utils/Notifications";
import { useRouter } from "next/navigation";
import FormErrorMessage from "../error/FormErrorMessage";
import SocialIcons from "./SocialIcons";
import Loader from "../loader/Loader";

function LoginForm() {
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    setLoginError(false);
    const response = await postRequest("/user/login", data);

    if (response?.message === "Ingreso exitoso") {
      dispatch(setUserInStore(response.token));
      router.push("/");
    } else if (response?.message === "Ingreso fallido") {
      setLoginError(true);
    } else {
      errorNotification(
        "Error al procesar el ingreso. Intente de nuevo en unos minutos."
      );
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex flex-col px-12 h-full justify-center items-center text-center"
    >
      <h1 className="font-bold font-main text-4xl">Ingresar</h1>
      <SocialIcons />
      <span className="text-sm">o ingresá con tu email</span>

      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      {errors.email && errors.email.type === "required" && (
        <FormErrorMessage content="Debes completar este campo" />
      )}
      {loginError && (
        <FormErrorMessage content="Usuario y/o contraseña inválidos." />
      )}

      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Contraseña"
      />
      {errors.password && errors.password.type === "required" && (
        <FormErrorMessage content="Debes completar este campo" />
      )}
      {loginError && (
        <FormErrorMessage content="Usuario y/o contraseña inválidos." />
      )}

      {!loading ? (
        <button
          type="submit"
          className="rounded-[20px] bg-custome-primary text-base text-custome-secondary font-bold py-2 px-11 mt-7 transition-transform duration-[80ms] ease-in active:scale-[0.95]"
        >
          INGRESAR
        </button>
      ) : (
        <Loader />
      )}
    </form>
  );
}

export default LoginForm;
