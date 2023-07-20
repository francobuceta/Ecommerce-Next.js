"use client";

const Overlay = ({ overlayClass, setOverlayClass }) => {
  const handleOverlayStyle = () => {
    setOverlayClass(!overlayClass);
  };

  return (
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1 className="font-bold font-main text-4xl">¡Bienvenido De Nuevo!</h1>
        <p className="text-base my-5">
          Para seguir conectado con nosotros ingresá tu información personal
        </p>
        <button
          className="rounded-[20px] border border-solid border-white bg-transparent text-base text-lightblack font-bold py-2 px-11 transition-transform duration-[80ms] ease-in active:scale-[0.95]"
          id="signIn"
          onClick={handleOverlayStyle}
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
          onClick={handleOverlayStyle}
        >
          REGISTRARSE
        </button>
      </div>
    </div>
  );
};

export default Overlay;
