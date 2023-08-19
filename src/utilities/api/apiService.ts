import axios, { AxiosResponse } from "axios";

export type ApiResponse = {
  total: number;
  total_pages: number;
  results: {
    id: string;
    alt_description: string;
    description: string;
    urls: {
      regular: string;
    };
  }[];
};

type Orientation = "landscape" | "portrait" | "squarish";
interface ImportMetaEnvWithUnsplashAccessKey extends ImportMetaEnv {
  VITE_UNSPLASH_ACCESS_KEY: string;
}

export default async function getImages(
  query: string,
  perPage: number,
  orientation: Orientation,
  pagination?: number
) {

  const accessKey = import.meta.env as ImportMetaEnvWithUnsplashAccessKey;
  const unsplashAccessKey: string = accessKey.VITE_UNSPLASH_ACCESS_KEY;
  const apiUrl = "https://api.unsplash.com/search/photos";

  try {
    const currentPage = pagination || Math.floor(Math.random() * 30 + 1);

    const response: AxiosResponse<ApiResponse> = await axios.get(
      `${apiUrl}?query=${encodeURIComponent(
        query
      )}&per_page=${perPage}&page=${currentPage}&orientation=${orientation}&client_id=${unsplashAccessKey}`
    );

    return response.data;
  } catch (error) {
    // Handle error appropriately
    throw new Error("Failed to fetch data");
  }
}
