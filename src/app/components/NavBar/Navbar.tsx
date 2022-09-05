import { StyledNavbar } from './NavbarStyles';
import Container from '../../shared/components/Container/Container';
import Box from '../../shared/components/Box/Box';
import Typography from '../../shared/components/Typography/Typography';

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Box className="logo-wrapper">
          <Typography align="left" className="logo">
            Adopt a Pet
          </Typography>
        </Box>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
