import { useQuery } from 'react-query';
import { PetProps } from '../types/pet';
import { fetchData } from '../../services/services';

const apiUrl = process.env.REACT_APP_API;

export function getPetList() {
  return useQuery<PetProps[], Error>(['petList'], () => fetchData(`${apiUrl}`), {
    refetchOnWindowFocus: false
  });
}
