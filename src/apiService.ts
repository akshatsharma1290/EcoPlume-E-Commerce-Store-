import axios, { AxiosResponse } from "axios";

type ApiResponse = {
   total: number;
  total_pages: number;
  results: {
    id: string;
    alt_description : string
    description : string
    urls: {
      regular: string;
      // Add other properties you need from the response
    };
    // Add other properties you need from the response
  }[];
}

type Orientation = "landscape" | "portrait" | "squarish"


export default async function getImages(query: string , perPage : number , orientation : Orientation) {
  interface ImportMetaEnvWithUnsplashAccessKey extends ImportMetaEnv {
    VITE_UNSPLASH_ACCESS_KEY: string;
  }

  const accessKey = import.meta.env as ImportMetaEnvWithUnsplashAccessKey;
  const unsplashAccessKey: string = accessKey.VITE_UNSPLASH_ACCESS_KEY;
  const apiUrl = "https://api.unsplash.com/search/photos";

  try {
    const page = Math.floor(Math.random() * 100 + 1)
    const response: AxiosResponse<ApiResponse> = await axios.get(
      `${apiUrl}?query=${encodeURIComponent(
        query
      )}&per_page=${perPage}&orientation=${orientation}&client_id=${unsplashAccessKey}`
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    // Handle error appropriately
    throw new Error("Failed to fetch data");
  }
}
