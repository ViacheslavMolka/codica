import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import WeatherBar from '../WeatherBar/WeatherBar';
import Weather from './weather.jpg';
import { toСelsius } from '../../helpers';
import { useAppDispatch } from '../../store';
import { hourlyWeather, updateWeather } from '../../store/weather/thunk';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useStyles from './styles';

const WeatherCard: React.FC<any> = ({ info }) => {
  const [isDetails, setIsDetails] = React.useState(true);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const { hourly = [] } = useTypedSelector(state => state.weather);

  React.useEffect(() => {
    dispatch(hourlyWeather(info.name));
  }, [info.name]);

  const temp: any = hourly.length && hourly.find((item: any) => item?.city?.name === info?.name);
  
  return (
    <div>
      {info && (isDetails ? 
        <Card className={classes.card}>
          <CardActionArea onClick={() => setIsDetails(!isDetails)}>
            <CardMedia
              component="img"
              image={Weather}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                {info?.name}
              </Typography>
              <Typography variant="h5" color="GrayText">
                {toСelsius(info?.main?.temp)}°
              </Typography>
              <Typography variant="subtitle2" color="GrayText">
                {info?.clouds?.all > 50 ? 'Cloudy' : 'Cloudless'}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              sx={{ margin: '0 auto' }}
              size="small"
              color="inherit"
              onClick={() => dispatch(updateWeather(info.name))}
            >
              Update
            </Button>
          </CardActions>
        </Card>
          :
        <Card className={classes.card}>
          <CardActionArea onClick={() => setIsDetails(!isDetails)}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Details
              </Typography>
              <Typography sx={{ paddingTop: 3 }} variant="body2" color="text.secondary">
                Feels like: {toСelsius(info?.main?.feels_like)}°
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Humidity: {info?.main?.humidity}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Wind speed: {info?.wind?.speed} m/s
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sunrise: {new Date(info?.sys?.sunrise).toString().substr(15, 9)} AM
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sunset: {new Date(info?.sys?.sunset).toString().substr(15, 9)} PM
              </Typography>
            </CardContent>
              <WeatherBar temp={temp?.list ? temp.list.slice(0, 7) : []} />
          </CardActionArea>
        </Card>
      )}
    </div>
  );
};

export default WeatherCard;
