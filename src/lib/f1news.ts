const NEWS_URL = process.env.NEXT_PUBLIC_NEWS_API as string;
const KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY as string;

export const getNews = async (): Promise<any[] | any> => {
  try {
    const response = await fetch(`${NEWS_URL}`, {
      headers: {
        "x-rapidapi-key": KEY,
        "x-rapidapi-host": "f1-latest-news.p.rapidapi.com",
      },
    });
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
