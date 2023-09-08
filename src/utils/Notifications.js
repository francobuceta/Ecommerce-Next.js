import toast from "react-hot-toast";

export const successNotification = (content) => {
  toast.success(content);
};

export const errorNotification = (content) => {
  toast.error(content, { style: { background: "#cc0000", color: "#ffffff" } });
};
