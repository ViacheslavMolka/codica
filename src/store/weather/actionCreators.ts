import {
  GetWeatherAction,
  GetWeatherErrorAction,
  HourlyGetWeatherAction,
  IWeather,
  UpdateGetWeatherAction,
  WeatherActionEnum
} from './actionTypes';

export const loadWeather = (payload: IWeather): GetWeatherAction => ({ type: WeatherActionEnum.GET_WEATHER, payload });

export const newWeather = (payload: IWeather): UpdateGetWeatherAction => ({ type: WeatherActionEnum.UPDATE_WEATHER, payload });

export const getHourlyWeather = (payload: Array<object>): HourlyGetWeatherAction => ({ type: WeatherActionEnum.HOURLY_WEATHER, payload });

export const getWeatherError = (payload: string): GetWeatherErrorAction => ({ type: WeatherActionEnum.ERROR, payload });
