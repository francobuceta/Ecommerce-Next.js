const URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
import { getLocalStorage } from "@/utils/LocalStorageFunctions";

const getToken = () => {
  const token = getLocalStorage("auth") || "";
  const Authorization = token && `Bearer ${token}`;
  return Authorization;
};

export const getRequest = async (endpoint) => {
  try {
    const response = await fetch(URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(error);
    }
    return response.json();
  } catch (error) {
    return "Ha ocurrido un error inesperado";
  }
};

export const postRequest = async (endpoint, data) => {
  try {
    const response = await fetch(URL + endpoint, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(error);
    }
    return response.json();
  } catch (error) {
    return "Ha ocurrido un error inesperado";
  }
};

export const postPurchase = async (endpoint, purchaseData) => {
  try {
    const response = await fetch(URL + endpoint, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken()
      },
      body: JSON.stringify({ purchaseInfo: purchaseData })
    });

    if (!response.ok) {
      throw new Error(error);
    }

    return response.json();
  } catch (error) {
    return "Ha ocurrido un error inesperado";
  }
};

export const deleteRequest = async (endpoint) => {
  try {
    const response = await fetch(URL + endpoint, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken(),
      }
    });

    if (!response.ok) {
      throw new Error(error);
    }

    return response.json();
  } catch (error) {
    return "Ha ocurrido un error inesperado";
  }
};
