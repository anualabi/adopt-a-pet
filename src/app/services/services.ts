import axios from 'axios';

export const fetchData = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get(url);
  return data as T;
};

export const postData = <T>(url: string, data: any): Promise<T> => {
  return axios.post(url, data);
};
