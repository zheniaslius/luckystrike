import { Modal, ModalOverflow, ModalClose, Typography, ModalDialog } from '@mui/joy';

const AddModal = ({ children, onClose, title, open }) => {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}
    >
      <ModalOverflow>
        <ModalDialog sx={{width: 600}}>
          <ModalClose variant="outlined" />
          <Typography component="h2" id="modal-title" level="h4" textColor="inherit" fontWeight="lg" mb={4}>
            {title}
          </Typography>
          {children}
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  );
};

export default AddModal;
