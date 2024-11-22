const BASE_URL = process.env.NEXT_PUBLIC_ERGASF1_API as string;
const Year = new Date().getFullYear();

export const getContstructors = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${Year}/constructors.json`);
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

export const getDrivers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${Year}/drivers.json`);
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

export const getCurrentSchedule = async () => {
  try {
    const response = await fetch(`${BASE_URL}/current.json`);
    const clone = response.clone();

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error parsing schedule", error);
      const text = await clone.text();
      return text;
    }
  } catch (error) {
    console.error("Error fetching schedule data", error);
    return error instanceof Error ? error : new Error(String(error));
  }
};

export const getSingleSchedule = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${Year}/${id}.json`);
    const clone = response.clone();

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error parsing schedule", error);
      const text = await clone.text();
      return text;
    }
  } catch (error) {
    console.error("Error fetching schedule data", error);
    return error instanceof Error ? error : new Error(String(error));
  }
}
