import Container from '../shared/components/Container/Container';
import Typography from '../shared/components/Typography/Typography';
import { PetList } from '../components/Pet';
import { getPetList } from '../shared/hooks/usePet';
import Spinner from '../shared/components/Spinner/Spinner';
import ErrorMessage from '../shared/components/Error/ErrorMessage';

const HomePage = () => {
  const { isLoading, isError, data } = getPetList();

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorMessage message="Unable to display pets." />;

  if (!data) return <Typography align="center">Sorry, no pet available for adoption.</Typography>;

  return (
    <Container>
      <PetList pets={data} />
    </Container>
  );
};

export default HomePage;
