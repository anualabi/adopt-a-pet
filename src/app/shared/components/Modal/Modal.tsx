import PropTypes from 'prop-types';
import { default as ReactModal } from 'react-modal';
import { Button } from '../Button/Button';
import Typography from '../Typography/Typography';
import { ModalProps, styles, StyledHeader, StyledContent, StyledFooter } from './ModalStyles';

const Modal = ({ children, modalIsOpen, closeModal, title, ...props }: ModalProps) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      {...props}
      style={styles}
    >
      <StyledHeader>
        <Typography className="modal-title">{title}</Typography>{' '}
        <Button className="close-btn" onClick={closeModal}>
          x
        </Button>
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
      <StyledFooter></StyledFooter>
    </ReactModal>
  );
};

Modal.propTypes = {
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  title: PropTypes.string
};

Modal.defaultProps = {
  modalIsOpen: false,
  closeModal: () => null,
  title: ''
};

export default Modal;
