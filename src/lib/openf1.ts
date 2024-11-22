const BASE_URL = process.env.NEXT_PUBLIC_OPENF1_API as string;

export const getMeetings = async (year: number): Promise<any[] | any> => {
  try {
    const response = await fetch(`${BASE_URL}/meetings`);
    const clone = response.clone();

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error parsing meetings JSON", error);
      const text = await clone.text();
      return text;
    }
  } catch (error) {
    console.error("Error fetching meetings data", error);
    return error instanceof Error ? error : new Error(String(error));
  }
};
