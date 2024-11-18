import { Constructor } from "./interfaces";

const BASE_URL = process.env.NEXT_PUBLIC_ERGASF1_API as string;

export const getContstructors = async (): Promise<Constructor[] | any> => {
  try {
    const response = await fetch(`${BASE_URL}/2024/constructors.json`);
    const clone = response.clone();

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error parsing constructors", error);
      const text = await clone.text();
      return text;
    }
  } catch (error) {
    console.error("Error fetching constructors data", error);
    return error instanceof Error ? error : new Error(String(error));
  }
};

export const getDrivers = async (): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/2024/drivers.json`);
    const clone = response.clone();

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error parsing drivers", error);
      const text = await clone.text();
      return text;
    }
  } catch (error) {
    console.error("Error fetching drivers data", error);
    return error instanceof Error ? error : new Error(String(error));
  }
};
