const URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const getRequest = async (endpoint) => {
  try {
    const response = await fetch(URL + endpoint, { next: { revalidate: 60 } });

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
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(error);
    }
    return response.json();
  } catch (error) {
    return "Ha ocurrido un error inesperado";
  }
};
