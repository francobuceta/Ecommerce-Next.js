const URL = process.env.BACKEND_API_URL;

const getToken = () => {
    const { token } = getLocalStorage("auth") || "";
    const Authorization = token && `Bearer ${token}`;
    return Authorization;
};