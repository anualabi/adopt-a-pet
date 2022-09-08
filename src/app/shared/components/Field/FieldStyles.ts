import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const StyledInputGroup = styled.div`
  border: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  justiify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  height: 40px;
  max-width: 400px;
  width: 100%;
  transition: 0.2s;

  .start-icon {
    margin-right: 0.25rem;
  }

  .end-icon {
    margin-left: 0.25rem;
  }

  &:hover,
  &:focus-within {
  }

  input {
    border: none;
    box-sizing: border-box;
    line-height: 1.5;
    margin-right: auto;
    width: 100%;

    &::placeholder {
      color: #ccc;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const StyledSelect = styled.select`
  border: 1px solid #ccc;
  margin-bottom: 1.5rem;
  height: 40px;
  max-width: 400px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
