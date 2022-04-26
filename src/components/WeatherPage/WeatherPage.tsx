/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box } from '@mui/system';

import WeatherCard from '../WeatherCard/WeatherCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getWeather } from '../../store/weather/thunk';
import { useAppDispatch } from '../../store';
import { Button, TextField } from '@mui/material';

const WeatherPage: React.FC = () => {
  const { weather = [] } = useTypedSelector(state => state.weather);
  const [city, setCity] = React.useState('');
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    !!city && localStorage.setItem(`${city}`, city)
  }, [weather])

  const handleSubmit = () => {
    dispatch(getWeather(city));
  };
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField 
          id="city"
          placeholder="Type city"
          variant="outlined"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <Button sx={{ marginLeft: 2 }} onClick={handleSubmit} variant="outlined" disabled={!city}>
          Add sity
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {weather.map((item: any) => (
          <WeatherCard key={item.name} info={item} />
        ))}
      </Box>
    </Box>
  );
};

export default WeatherPage;
