import PetItem from '../PetItem/PetItem';
import { PetProps } from '../../shared/types/pet';
import { StyledPetList } from './PetListStyles';

type PetListProps = { pets: PetProps[] };

const PetList = ({ pets }: PetListProps) => {
  const petList = pets.map((pet) => <PetItem key={pet.id} pet={pet} />);

  return <StyledPetList>{petList}</StyledPetList>;
};

export default PetList;
