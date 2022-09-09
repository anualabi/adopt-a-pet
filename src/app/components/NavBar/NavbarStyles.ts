import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: var(--background);
  color: var(--text-color);
  margin-bottom: 2rem;
  width: 100vw;
  height: 60px;

  .container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo-wrapper {
    max-width: 180px;
    width: 100%;
    margin-right: auto;

    .logo {
      font-size: 1.5rem;
      font-weight: var(--bold-font);
      letter-spacing: 1px;
      padding: 1rem 0;
      margin: 0;
    }
  }

  @media screen and (min-width: 992px) {
    height: 70px;
  }
`;
