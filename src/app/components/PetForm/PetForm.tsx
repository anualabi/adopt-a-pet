import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../shared/components/Avatar/Avatar';
import { Button } from '../../shared/components/Button/Button';
import { Field } from '../../shared/components/Field/Field';
import { petOption } from '../../shared/constants/petOption';
import { addPetItem, updatePetItem } from '../../shared/hooks/usePet';
import { StyledPetForm } from './PetFormStyles';
import { PetProps } from '../../shared/types/pet';

interface PetFormProps {
  onsubmit: () => void;
  currentPet?: PetProps;
}

const PetForm = ({ onsubmit, currentPet }: PetFormProps) => {
  const initialState = currentPet || { id: '', name: '', kind: '', photo: '' };
  const [pet, setPet] = useState(initialState);
  const photoInput = useRef<HTMLInputElement>(null);
  const mutation = currentPet ? updatePetItem(pet) : addPetItem(pet);
  const navigate = useNavigate();

  const updatePhoto = () => {
    const file = photoInput.current?.files && photoInput.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPet({ ...pet, photo: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value.trim();
    setPet({ ...pet, [e.currentTarget.name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate();
    setPet(initialState);
    onsubmit();
    !currentPet && navigate('/');
  };

  return (
    <StyledPetForm onSubmit={handleSubmit}>
      {pet.photo && <Avatar src={pet.photo} alt={pet.name} className="form-avatar" />}
      <Field>
        <Field.Label>Photo</Field.Label>
        <Field.Input
          type="file"
          aria-label="photo"
          name="photo"
          ref={photoInput}
          onChange={updatePhoto}
        />
      </Field>
      <Field>
        <Field.Label>Name</Field.Label>
        <Field.Input
          type="text"
          aria-label="name"
          required
          name="name"
          value={pet.name}
          onChange={handleChange}
        />
      </Field>
      <Field>
        <Field.Label>Kind</Field.Label>
        <Field.Select
          aria-label="kind"
          required
          dropdownOptions={petOption}
          name="kind"
          value={pet.kind}
          onChange={handleChange}
        />
      </Field>
      <Button type="submit" className="form-btn">
        Submit
      </Button>
    </StyledPetForm>
  );
};

export default PetForm;
