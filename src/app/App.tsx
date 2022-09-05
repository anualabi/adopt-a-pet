import Navbar from './components/NavBar/Navbar';
import HomePage from './pages/HomePage';
import { StyledApp } from './AppStyles';

function App() {
  return (
    <StyledApp>
      <Navbar />
      <HomePage />
    </StyledApp>
  );
}

export default App;
