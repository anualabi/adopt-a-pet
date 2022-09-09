import axios from 'axios';
import { PetProps } from '../shared/types/pet';

export const fetchPetData = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get(url);
  return data as T;
};

export const postPetData = <T>(url: string, data: PetProps): Promise<T> => {
  return axios.post(url, data);
};

export const updatePetData = <T>(url: string, data: PetProps): Promise<T> => {
  return axios.put(url, data);
};
