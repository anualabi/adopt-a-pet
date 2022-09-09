import Box from '../../shared/components/Box/Box';
import Card from '../../shared/components/Card/Card';
import Typography from '../../shared/components/Typography/Typography';
import Avatar from '../../shared/components/Avatar/Avatar';
import { Button } from '../../shared/components/Button/Button';
import { PetProps } from '../../shared/types/pet';
import { StyledPetDetails } from './PetDetailsStyles';

interface PetDetailsProps {
  pet: PetProps;
  onEditPet: () => void;
  onAdoptPet: () => void;
}

const PetDetails = ({ pet, onEditPet, onAdoptPet }: PetDetailsProps) => {
  const { name, photo, kind } = pet;

  return (
    <StyledPetDetails>
      <Card className="card">
        <Box className="pet-image">
          <Avatar src={photo} alt={name} className="avatar" />
        </Box>
        <Box className="pet-info">
          <Typography className="pet-text pet-name">
            <span>Name:</span> {name}
          </Typography>
          <Typography className="pet-text pet-kind">
            <span>Kind:</span> {kind}
          </Typography>
          <Box className="pet-cta">
            <Button className="btn" onClick={onEditPet}>
              Edit pet
            </Button>
            <Button className="btn" onClick={onAdoptPet}>
              Adopt pet
            </Button>
          </Box>
        </Box>
      </Card>
    </StyledPetDetails>
  );
};

export default PetDetails;
