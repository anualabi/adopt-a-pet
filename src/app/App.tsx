import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import PetPage from './pages/PetPage/PetPage';
import { Button } from './shared/components/Button/Button';
import Modal from './shared/components/Modal/Modal';
import PetForm from './components/PetForm/PetForm';
import { StyledApp } from './AppStyles';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <StyledApp>
      <BrowserRouter>
        <Navbar>
          <Button onClick={() => setIsOpen(true)}>Add Pet</Button>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<PetPage />} />
        </Routes>
        <Modal modalIsOpen={modalIsOpen} closeModal={() => setIsOpen(false)} title="Add a Pet">
          <PetForm onsubmit={() => setIsOpen(false)} />
        </Modal>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
