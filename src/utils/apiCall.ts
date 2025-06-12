export const getHeartNames = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${BASE_URL}/api/payments`, {
      cache: "no-store",
    });

    if (!response) {
      throw new Error(`Error on the fetch`);
    }

    const data = await response.json();
    return data.value;
  } catch (error) {
    throw new Error(`Error on the fetch, ${error}`);
  }
};
