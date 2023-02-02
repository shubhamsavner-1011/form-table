import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Form from '../Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPath } from '@/constants/iconPath';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign:'end',
};

const DrawerModal = ({open, setOpen, setData, data, edit, setEditData}) =>  {
    const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <FontAwesomeIcon icon={IconPath.cross} onClick={handleClose} style={{fontSize:'25px', cursor:'pointer'}}/>
        <Form setData={setData} data={data} edit={edit} setOpen={setOpen} setEditData={setEditData}/>
        </Box>
      </Modal>
    </div>
  );
}

export default DrawerModal;