export enum WeatherActionEnum {
  GET_WEATHER = "GET_WEATHER",
  UPDATE_WEATHER = "UPDATE_WEATHER",
  HOURLY_WEATHER = "HOURLY_WEATHER",
  ERROR = "ERROR",
}

export interface WeatherState {
  weather: Array<object>,
	hourly: Array<object>,
	error: string;
}

export interface IWeather {
  clouds: {
    all: number,
  };
  main: {
    feels_like: number,
    humidity: number,
    temp: number,
  };
  name: string;
  sys: {
    sunrise: number,
    sunset: number,
  };
  wind: {
    speed: number,
  };
}

export interface GetWeatherAction {
  type: WeatherActionEnum.GET_WEATHER;
  payload: IWeather;
}

export interface UpdateGetWeatherAction {
  type: WeatherActionEnum.UPDATE_WEATHER;
  payload: IWeather;
}

export interface HourlyGetWeatherAction {
  type: WeatherActionEnum.HOURLY_WEATHER;
  payload: Array<object>;
}

export interface GetWeatherErrorAction {
  type: WeatherActionEnum.ERROR;
  payload: string;
}

export type WeatherActions =
  GetWeatherAction |
  UpdateGetWeatherAction |
  HourlyGetWeatherAction |
  GetWeatherErrorAction
