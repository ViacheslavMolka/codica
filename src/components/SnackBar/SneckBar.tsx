import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../store';
import { getWeatherError } from '../../store/weather/actionCreators';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars: React.FC = () => {
  const dispatch = useAppDispatch();
  const { error } = useTypedSelector(state => state.weather);
  const [openError, setOpenError] = React.useState({
    open: false,
    message: error
  });
  
  React.useEffect(() => {
    if (error !== '') {
      setOpenError({
        open: true,
        message: error
      })
    }
  }, [error])

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError({
      ...openError,
      open: false,
    });
    dispatch(getWeatherError(''));
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openError.open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {openError.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default CustomizedSnackbars;
