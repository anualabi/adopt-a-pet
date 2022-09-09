import { Link } from 'react-router-dom';
import Card from '../../shared/components/Card/Card';
import Typography from '../../shared/components/Typography/Typography';
import Avatar from '../../shared/components/Avatar/Avatar';
import { PetProps } from '../../shared/types/pet';
import { StyledPetItem } from './PetItemStyles';

type PetItemProps = { pet: PetProps };

const PetItem = ({ pet }: PetItemProps) => {
  const { id, name, photo } = pet;

  return (
    <StyledPetItem>
      <Link to={`/${id}`}>
        <Card className="card">
          <Avatar src={photo} alt={name} />
          <Typography align="center" className="pet-name">
            <span>Name:</span> {name}
          </Typography>
        </Card>
      </Link>
    </StyledPetItem>
  );
};

export default PetItem;
