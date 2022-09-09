import styled from 'styled-components';

export const StyledPetDetails = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    min-height: 400px;
    padding: 1rem;
    margin: 1rem;
  }

  .pet-image {
    display: flex;
    justify-content: center;
    align-items: start;
  }

  .pet-image > .avatar {
    max-width: 200px;
  }

  .pet-info {
    width: 200px;
    margin: 1rem auto;
  }

  .pet-text {
    font-weight: var(--bold-font);
  }

  .pet-text > span {
    font-weight: var(--normal-font);
  }

  .pet-info > .btn {
    margin-top: 2rem;
  }

  @media screen and (min-width: 992px) {
    .card {
      flex-direction: row;
    }

    .pet-info {
      margin: 0;
      width: 100%;
    }
  }
`;
