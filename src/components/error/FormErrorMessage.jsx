"use client";
import { AiOutlineWarning } from "react-icons/ai";

const FormErrorMessage = ({ content, register }) => {
  return (
    <div className={`${register ? "h-[10px] md:h-auto" : "h-auto"} flex items-start w-full pl-2 gap-1`}>
      <AiOutlineWarning color="#cc0000" />
      <span className="text-sm text-left text-custome-red">{content}</span>
    </div>
  );
};

export default FormErrorMessage;
