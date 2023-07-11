const URL = process.env.BACKEND_API_URL;

export const getRequest = async (endpoint) => {
  try {
    const response = await fetch(URL + endpoint, {next: { revalidate: 60 }});

    return response.json();
  } catch (error) {
    if (!response.ok) {
      throw new Error(error);
    }
  }
};