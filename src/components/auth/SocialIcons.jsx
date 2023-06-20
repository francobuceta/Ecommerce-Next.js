import { AiOutlineGooglePlus, AiOutlineGithub } from "react-icons/ai";

const SocialIcons = () => {
    return (
        <div className="social-container">
            <a href="#" className="my-4">
                <AiOutlineGooglePlus size={20} />
            </a>
            <a href="#" className="my-4">
                <AiOutlineGithub size={20} />
            </a>
        </div>
    )
}

export default SocialIcons;