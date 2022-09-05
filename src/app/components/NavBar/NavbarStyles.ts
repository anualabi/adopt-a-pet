import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: var(--background);
  color: var(--text-color);
  margin-bottom: 2rem;
  width: 100vw;

  .logo-wrapper {
    h1 {
      font-size: 2rem;
      font-weight: var(--bold-font);
      letter-spacing: 1px;
      padding: 1rem 0;
      margin: 0;
    }
  }
`;
