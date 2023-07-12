const URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const getRequest = async (endpoint) => {
  try {
    console.log("me ejecute");
    const response = await fetch(URL + endpoint);

    return response.json();
  } catch (error) {
    if (!response.ok) {
      throw new Error(error);
    }
  }
};
