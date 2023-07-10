import { getLocalStorage } from "@/utils/LocalStorageFunctions";

const URL = process.env.BACKEND_API_URL;

const getToken = () => {
  const { token } = getLocalStorage("auth") || "";
  const Authorization = token && `Bearer ${token}`;
  return Authorization;
};

export const getRequest = async (endpoint) => {
  const token = getToken();
  try {
    const { data } = await axios.get(URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken(),
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);

      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

export const postRequest = async (dataSend, endpoint) => {
  try {
    const { data } = await axios.post(URL + endpoint, dataSend, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken(),
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      return "An unexpected error occurred";
    }
  }
};
