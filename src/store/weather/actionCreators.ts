import {
  GetWeatherAction,
  GetWeatherErrorAction,
  HourlyGetWeatherAction,
  UpdateGetWeatherAction,
  WeatherActionEnum
} from './actionTypes';

export const loadWeather = (payload: Array<object>): GetWeatherAction => ({ type: WeatherActionEnum.GET_WEATHER, payload });

export const newWeather = (payload: Array<object>): UpdateGetWeatherAction => ({ type: WeatherActionEnum.UPDATE_WEATHER, payload });

export const getHourlyWeather = (payload: Array<object>): HourlyGetWeatherAction => ({ type: WeatherActionEnum.HOURLY_WEATHER, payload });

export const getWeatherError = (payload: string): GetWeatherErrorAction => ({ type: WeatherActionEnum.ERROR, payload });
