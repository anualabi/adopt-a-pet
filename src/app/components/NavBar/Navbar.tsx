import { Link } from 'react-router-dom';
import { StyledNavbar } from './NavbarStyles';
import Container from '../../shared/components/Container/Container';
import Box from '../../shared/components/Box/Box';
import Typography from '../../shared/components/Typography/Typography';

type NavbarProps = { children: React.ReactNode };

const Navbar = ({ children }: NavbarProps) => {
  return (
    <StyledNavbar>
      <Container className="container">
        <Box className="logo-wrapper">
          <Link to="/">
            <Typography align="left" className="logo">
              Adopt a Pet
            </Typography>
          </Link>
        </Box>
        {children}
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
