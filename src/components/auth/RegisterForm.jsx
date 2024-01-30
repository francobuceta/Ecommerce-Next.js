"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postRequest } from "@/services/clientFetching";
import { successNotification, errorNotification } from "@/utils/Notifications";
import { IoEye, IoEyeOff } from "react-icons/io5";
import FormErrorMessage from "../error/FormErrorMessage";
import SocialIcons from "./SocialIcons";
import Loader from "../loader/Loader";

function RegisterForm({ setOverlayClass }) {
  const [registerError, setRegisterError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setRegisterError(false);
    const response = await postRequest("/user/register", data);

    if (response?.message === "Usuario creado con éxito") {
      successNotification("Se ha registrado con éxito.");
      reset();
      setOverlayClass(false);
    } else if (response?.message === "Error al registrar usuario") {
      setRegisterError(true);
    } else {
      errorNotification(
        "Error al procesar el registro. Intente de nuevo en unos minutos."
      );
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white flex flex-col px-12 h-full justify-center items-center text-center"
    >
      <h1 className="font-bold font-main text-4xl auth_text-darkMode">
        Crear Cuenta
      </h1>
      <SocialIcons />
      <span className="text-sm auth_text-darkMode">
        o usá tu email para registrarte
      </span>
      <input
        type="text"
        placeholder="Nombre"
        className="auth_text-darkMode"
        {...register("firstName", { required: true })}
      />
      {errors.firstName && errors.firstName.type === "required" && (
        <FormErrorMessage
          content="Debes completar este campo"
          register={true}
        />
      )}
      <input
        type="text"
        placeholder="Apellido"
        className="auth_text-darkMode"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && errors.lastName.type === "required" && (
        <FormErrorMessage
          content="Debes completar este campo"
          register={true}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        className="auth_text-darkMode"
        {...register("email", { required: true })}
      />
      {errors.email && errors.email.type === "required" && (
        <FormErrorMessage
          content="Debes completar este campo"
          register={true}
        />
      )}

      <div className="w-full relative">
        <input
          type={showRegisterPassword ? "text" : "password"}
          placeholder="Contraseña"
          className="auth_text-darkMode"
          {...register("password", { required: true, minLength: 5 })}
        />
        {errors.password && errors.password.type === "required" && (
          <FormErrorMessage
            content="Debes completar este campo"
            register={true}
          />
        )}
        {errors.password && errors.password.type === "minLength" && (
          <FormErrorMessage
            content="La contraseña debe contar con al menos 5 caracteres."
            register={true}
          />
        )}
        {registerError && (
          <FormErrorMessage
            content="El email ingresado ya existe."
            register={true}
          />
        )}

        <div className="absolute top-[18px] right-3">
          {showRegisterPassword ? (
            <IoEye
              onClick={() => setShowRegisterPassword(false)}
              className="cursor-pointer auth_text-darkMode"
            />
          ) : (
            <IoEyeOff
              onClick={() => setShowRegisterPassword(true)}
              className="cursor-pointer auth_text-darkMode"
            />
          )}
        </div>
      </div>

      {!loading ? (
        <button
          type="submit"
          className="rounded-[20px] bg-custome-primary text-base text-custome-secondary font-bold py-2 px-11 mt-3 transition-transform duration-[80ms] ease-in active:scale-[0.95]"
        >
          REGISTRARSE
        </button>
      ) : (
        <Loader margin={"py-2 mt-3"} />
      )}
    </form>
  );
}

export default RegisterForm;
