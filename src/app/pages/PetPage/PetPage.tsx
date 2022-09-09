import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '../../shared/components/Container/Container';
import PetDetails from '../../components/PetDetails/PetDetails';
import { getPetItem } from '../../shared/hooks/usePet';
import Spinner from '../../shared/components/Spinner/Spinner';
import ErrorMessage from '../../shared/components/Error/ErrorMessage';
import Typography from '../../shared/components/Typography/Typography';
import Modal from '../../shared/components/Modal/Modal';
import PetForm from '../../components/PetForm/PetForm';
import { deletePetItem } from '../../shared/hooks/usePet';

const PetPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data } = getPetItem(id);
  const [modalIsOpen, setIsOpen] = useState(false);
  const mutation = deletePetItem(id);

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorMessage message="Unable to display pet details." />;

  if (!data) return <Typography align="center">Sorry, the pet info is not available.</Typography>;

  const handleAdoptPet = () => {
    mutation.mutate();
    mutation.isSuccess && navigate('/');
  };

  return (
    <Container>
      <PetDetails pet={data} onEditPet={() => setIsOpen(true)} onAdoptPet={handleAdoptPet} />
      <Modal modalIsOpen={modalIsOpen} closeModal={() => setIsOpen(false)} title="Edit Pet">
        <PetForm onsubmit={() => setIsOpen(false)} currentPet={data} />
      </Modal>
    </Container>
  );
};

export default PetPage;
