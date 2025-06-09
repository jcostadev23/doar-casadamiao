const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getHeartNames = async () => {
  try {
    const resp = await fetch(`${BASE_URL}/api/payments`);
    const heartNames = await resp.json();

    return heartNames.value;
  } catch (error) {
    return error;
  }
};
