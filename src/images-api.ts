import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export interface ImageData {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
  description: string;
  likes: number;
  user: {
    name: string;
    bio: string;
  };
  links: {
    download: string;
  };
}

interface Response {
  total: number;
  results: ImageData[];
}

export const fetchImagesWithQuery = async (
  query: string,
  page: number
): Promise<Response> => {
  const params = {
    client_id: 'HcAlQDD6PstAHRHFGR-hlv6F2IqVebu-hftH1gscrFk',
    query: `${query}`,
    page: `${page}`,
    per_page: 12,
  };

  const response = await axios.get('search/photos', { params });
  return response.data;
};
