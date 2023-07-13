const URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const getRequest = async (endpoint) => {
  try {
    const response = await fetch(URL + endpoint, { next: { revalidate: 60 } });

    return response.json();
  } catch (error) {
    if (!response.ok) {
      throw new Error(error);
    }
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

    return response.json();
  } catch (error) {
    /* if (!response.ok) {
      throw new Error(error);
    } */
    console.log(error);
  }
};
