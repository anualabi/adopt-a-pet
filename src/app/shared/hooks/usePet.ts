import { useMutation, useQuery, useQueryClient } from 'react-query';
import { PetProps } from '../types/pet';
import { fetchData, postData } from '../../services/services';

const apiUrl = process.env.REACT_APP_API;

export function getPetList() {
  return useQuery<PetProps[], Error>(['petList'], () => fetchData(`${apiUrl}`), {
    refetchOnWindowFocus: false
  });
}

export function addPetItem(data: PetProps) {
  const queryClient = useQueryClient();
  return useMutation(() => postData(`${apiUrl}`, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['petList']);
    }
  });
}
