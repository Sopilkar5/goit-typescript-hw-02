import axios from 'axios';
import { UnsplashResponse } from '../types';

export const fetchImages = async (query: string, page: number = 1): Promise<UnsplashResponse | undefined> => {
  try {
    const response = await axios.get<UnsplashResponse>('https://api.unsplash.com/search/photos', {
      params: {
        query,
        page,
        per_page: 12,
        client_id: 'JpWHyi59Eu4iQhmgdj5hmZ6klpHKCp_1gZUQUqzdbNU',
      },
      headers: {
        'Accept-Version': 'v1',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    return undefined;
  }
};