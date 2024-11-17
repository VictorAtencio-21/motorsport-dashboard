const BASE_URL = process.env.NEXT_PUBLIC_OPENF1_API;

export const getMeetings = async () => {
  try {
    const response = await fetch(`${BASE_URL}/meetings`);
    const clone = response.clone();

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error parsing meetings JSON", error);
      return clone.text();
    }
  } catch (error) {
    console.error("Error fetching meetings data", error);
    return error;
  }
};
