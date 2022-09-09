import { useMutation, useQuery, useQueryClient } from 'react-query';
import { PetProps } from '../types/pet';
import { fetchPetData, postPetData, updatePetData } from '../../services/services';

const apiUrl = process.env.REACT_APP_API;

export function getPetList() {
  return useQuery<PetProps[], Error>(['petList'], () => fetchPetData(`${apiUrl}`), {
    refetchOnWindowFocus: false
  });
}

export function getPetItem(id: string | undefined) {
  return useQuery<PetProps, Error>(['petItem', id], () => fetchPetData(`${apiUrl}/${id}`), {
    enabled: Boolean(id !== undefined),
    refetchOnWindowFocus: false
  });
}

export function addPetItem(data: PetProps) {
  const queryClient = useQueryClient();
  return useMutation(() => postPetData(`${apiUrl}`, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['petList']);
    }
  });
}

export function updatePetItem(data: PetProps) {
  const queryClient = useQueryClient();
  return useMutation(() => updatePetData(`${apiUrl}/${data.id}`, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['petItem']);
    }
  });
}
