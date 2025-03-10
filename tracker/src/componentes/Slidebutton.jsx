import React, { useState } from 'react';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Visibilidad from '@mui/icons-material/Visibility';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import FullScreenDialog from '../componentes/Dialogo';  
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <FileCopyIcon />, name: 'Eliminar usuario' },
  { icon: <Edit />, name: 'Editar datos' },
  { icon: <Visibilidad/>, name: 'Ver mediciones' }
];

const BasicSpeedDial = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate(); // Inicializa useHistory

  const handleActionClick = (actionName) => {
    if (actionName === 'Eliminar usuario') {
      setModalOpen(true);
    } else if (actionName === 'Ver mediciones') {
      setDialogOpen(true);
    } else if (actionName === 'Editar datos') {
      // Redirige a la página de edición cuando se hace clic en "Editar datos"
      navigate('/Editar');
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleDeleteUser = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ height: 40, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleActionClick(action.name)}
          />
        ))}
      </SpeedDial>

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', border: '2px solid #000', p: 2 }}>
          <p id="modal-modal-title">¿Estás seguro de que quieres eliminar este usuario?</p>
          <Button onClick={handleDeleteUser}>Eliminar</Button>
          <Button onClick={handleCloseModal}>Cancelar</Button>
        </Box>
      </Modal>

      {isDialogOpen && <FullScreenDialog onClose={handleCloseDialog} />}
    </Box>
  );
}

export default BasicSpeedDial;
