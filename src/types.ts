export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
  user: {
    name: string;
  };
  likes: number;
}

export interface UnsplashResponse {
  results: UnsplashImage[];
}