import styled from 'styled-components';

export const StyledPetList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 992px) {
    column-gap: 76px;
    justify-content: flex-start;
  }
`;
