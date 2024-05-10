import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImagesWithQuery = async (
  query: string,
  page: number
): Promise<any> => {
  const params = {
    client_id: 'HcAlQDD6PstAHRHFGR-hlv6F2IqVebu-hftH1gscrFk',
    query: `${query}`,
    page: `${page}`,
    per_page: 12,
  };

  const response = await axios.get('search/photos', { params });
  return response.data;
};
