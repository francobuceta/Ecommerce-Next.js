"use client";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setUserInStore } from "@/store/slices/userSlice";
import { useRouter } from "next/navigation";
import { errorNotification } from "@/utils/Notifications";

const SocialIcons = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleThirdPartyAuth = (path) => {
    const popUp = window.open(
      `https://backend-nodejs-self.vercel.app/user/${path}`,
      "targetWindow",
      `toolbar=no,
      location=no,
      status=no,
      menubar=no,
      scrollbars=yes,
      resizable=yes,
      width=620,
      height=700`
    );

    window.addEventListener("message", (event) => {
      if (event.origin === "https://backend-nodejs-self.vercel.app") {
        if (event.data) {
          dispatch(setUserInStore(event.data));
          popUp?.close();
          router.push("/");
        } else {
          errorNotification(
            "Error al procesar el ingreso. Intente de nuevo en unos minutos."
          );
        }
      }
    });
  };

  return (
    <div className="my-1">
      <div className="my-4 border border-solid border-[#ddd] rounded-full inline-flex justify-center items-center mx-1 w-[40px] h-[40px] cursor-pointer hover:text-[#DB4437] hover:bg-[#F4B400] hover:border-custome-secondary">
        <AiOutlineGoogle
          size={20}
          className="auth_text-darkMode"
          onClick={() => {
            handleThirdPartyAuth("registroGoogle");
          }}
        />
      </div>
      <div className="my-4 border border-solid border-[#ddd] rounded-full inline-flex justify-center items-center mx-1 w-[40px] h-[40px] cursor-pointer hover:text-[#FFFFFF] hover:bg-custome-secondary hover:border-custome-secondary">
        <AiOutlineGithub
          size={20}
          className="auth_text-darkMode"
          onClick={() => {
            handleThirdPartyAuth("registroGithub");
          }}
        />
      </div>
    </div>
  );
};

export default SocialIcons;
