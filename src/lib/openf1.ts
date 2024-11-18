const BASE_URL = process.env.NEXT_PUBLIC_OPENF1_API as string;
import { Driver, Meeting } from "./interfaces";

export const getMeetings = async (): Promise<Meeting[] | any> => {
  try {
    const response = await fetch(`${BASE_URL}/meetings`);
    const clone = response.clone();

    try {
      const data: Meeting[] = await response.json();
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
