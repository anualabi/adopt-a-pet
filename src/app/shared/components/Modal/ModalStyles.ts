import styled from 'styled-components';

export interface ModalProps {
  children: React.ReactNode;
  title?: string;
  modalIsOpen: boolean;
  closeModal: () => void;
}

export const styles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.9)',
    width: '100vw',
    height: '100vh'
  },
  content: {
    border: 'none',
    maxWidth: '800px',
    maxHeight: 'calc(100vh - 10rem)',
    width: '100%',
    margin: 'auto',
    padding: ' 0'
  }
};

export const StyledHeader = styled.header`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  max-height: 60px;
  height: 100%;

  .modal-title {
    margin-right: auto;
  }

  .close-btn {
    padding: 0.5rem 1rem;
    margin: auto 0.25rem;
  }
`;

export const StyledContent = styled.main`
  padding: 1.5rem;
  min-height: calc(100% - 186px);
`;

export const StyledFooter = styled.footer`
  background: black;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0.75rem 1.5rem;
  max-height: 30px;
  height: 100%;
`;
