import { AiOutlineGooglePlus, AiOutlineGithub } from "react-icons/ai";

const SocialIcons = () => {
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
          console.log(event.data);

          popUp?.close();
        }
      }
    });
  };

  return (
    <div className="my-1">
      <div className="my-4 border border-solid border-[#ddd] rounded-full inline-flex justify-center items-center mx-1 w-[40px] h-[40px] cursor-pointer">
        <AiOutlineGooglePlus
          size={20}
          onClick={() => {
            handleThirdPartyAuth("registroGoogle");
          }}
        />
      </div>
      <div className="my-4 border border-solid border-[#ddd] rounded-full inline-flex justify-center items-center mx-1 w-[40px] h-[40px] cursor-pointer">
        <AiOutlineGithub
          size={20}
          onClick={() => {
            handleThirdPartyAuth("registroGithub");
          }}
        />
      </div>
    </div>
  );
};

export default SocialIcons;
