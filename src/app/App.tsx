import { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import HomePage from './pages/HomePage';
import { Button } from './shared/components/Button/Button';
import Modal from './shared/components/Modal/Modal';
import PetForm from './components/PetForm/PetForm';
import { StyledApp } from './AppStyles';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <StyledApp>
      <Navbar>
        <Button onClick={() => setIsOpen(true)}>Add Pet</Button>
      </Navbar>
      <HomePage />
      <Modal modalIsOpen={modalIsOpen} closeModal={() => setIsOpen(false)} title="Add a Pet">
        <PetForm onsubmit={() => setIsOpen(false)} />
      </Modal>
    </StyledApp>
  );
}

export default App;
