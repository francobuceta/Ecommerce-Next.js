import { AiOutlineGooglePlus, AiOutlineGithub } from "react-icons/ai";

const SocialIcons = () => {
    return (
        <div className="my-5">
            <div className="my-4 border border-solid border-[#ddd] rounded-full inline-flex justify-center items-center mx-1 w-[40px] h-[40px]">
                <AiOutlineGooglePlus size={20} />
            </div>
            <div className="my-4 border border-solid border-[#ddd] rounded-full inline-flex justify-center items-center mx-1 w-[40px] h-[40px]">
                <AiOutlineGithub size={20} />
            </div>
        </div>
    )
}

export default SocialIcons;