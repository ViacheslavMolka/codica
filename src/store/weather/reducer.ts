/* eslint-disable @typescript-eslint/no-explicit-any */
import { WeatherActionEnum, WeatherState, WeatherActions, IWeather } from './actionTypes';

const initialState: WeatherState = {
	weather: [],
	hourly: [],
	error: '',
};

export default function weather(state = initialState, action: WeatherActions): WeatherState {
	switch (action.type) {
		case WeatherActionEnum.GET_WEATHER: {
			const isHas: IWeather | any = state.weather.find((item: any) => item.name === action.payload.name);
			const checkWeather = isHas ? [] : [action.payload];
      return {
				...state,
        weather: [...state.weather, ...checkWeather],
      }}
		case WeatherActionEnum.UPDATE_WEATHER: {
			const newWeather: Array<IWeather> = state.weather.map((item: any) => {
				if (item.name === action.payload.name) {
					return action.payload
				}
				return item;
			})
			return {
				...state,
				weather: newWeather,
			}
		}
		case WeatherActionEnum.HOURLY_WEATHER:
      return {
				...state,
        hourly: [...state.hourly, action.payload],
      }
		case WeatherActionEnum.ERROR:
			return {
				...state,
				error: action.payload,
			}
		default:
			return state;
	}
}
