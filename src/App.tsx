import React from 'react';
import { Box } from '@mui/system';

import WeatherPage from './components/WeatherPage/WeatherPage';
import CustomizedSnackbars from './components/SnackBar/SneckBar';
import { useAppDispatch } from './store';
import { getWeather } from './store/weather/thunk';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const items = {...localStorage};
    for (const a in items) {
      dispatch(getWeather(a));
    }
  }, []);

  return (
    <Box>
      <WeatherPage />
      <CustomizedSnackbars />
    </Box>
  );
}

export default App;
