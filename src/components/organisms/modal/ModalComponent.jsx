/* eslint-disable react/jsx-no-bind */
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    maxWidth: '75%',
    maxHeight: '90%',
    marginLeft: '24px',
    overflowY: 'auto',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

const ModalComponent = ({ children, isOpen, closeModal, closeOnOverlayClick = true }) => {
  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
      shouldCloseOnOverlayClick={closeOnOverlayClick}
    >
      {children}
    </Modal>
  );
};

ModalComponent.defaultProps = {
  closeOnOverlayClick: true,
};

ModalComponent.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeOnOverlayClick: PropTypes.bool,
};

export default ModalComponent;
