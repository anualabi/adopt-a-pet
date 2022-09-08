import styled from 'styled-components';

export const StyledPetItem = styled.div`
  height: 280px;
  margin: 1rem 1rem 3rem;
  max-width: 280px;
  width: 100%;

  .card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 1rem;
  }

  .card > .pet-name {
    font-weight: var(--bold-font);
    margin: 1.5rem 0;
    text-transform: capitalize;
  }

  .card > .pet-name > span {
    font-weight: var(--normal-font);
  }

  @media screen and (min-width: 992px) {
    height: 350px;
    margin: 0 0 5rem;

    .card {
      max-width: 280px;
    }
  }
`;
