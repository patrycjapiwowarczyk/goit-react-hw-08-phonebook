import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import { closeNotification } from '../../redux/notificationSlice';

const Notification = () => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.notification.message);
  const open = useSelector(state => state.notification.open);

  const handleClose = () => {
    dispatch(closeNotification());
  };

  return (
    <Snackbar
      sx={{
        color: 'black',
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={handleClose}
      message={message}
      autoHideDuration={3000}
    />
  );
};

export default Notification;
