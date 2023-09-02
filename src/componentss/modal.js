import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {num, ques, TotalMarks, per} = props;

  return (
    <div>
      <Button onClick={handleOpen}>Check Result</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Congratulation. Your Result Has Announced
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Total Questions :{ques}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Total Questions :{TotalMarks}
          </Typography>
          <Typography id="modal-modal-title"  variant="h6" component="h2">
            Numbers :{num}
          </Typography>
          <Typography id="modal-modal-title"  variant="h6" component="h2">
            Percentage :{per}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}