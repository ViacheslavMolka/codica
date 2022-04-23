import { AppDispatch } from "..";
import {
  loadWeather,
  newWeather,
  getHourlyWeather,
  getWeatherError,
} from "./actionCreators";

export const getWeather = (name: string) => {
	return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=76219c903b8e8758872f9c9ead42c0de`);
      const data = await res.json();
      if (data.message) {
        dispatch(getWeatherError(data.message))
      } else {
        dispatch(loadWeather(data))
      }
    } catch(e) {
      dispatch(getWeatherError("Error"))
    }
	};
};

export const updateWeather = (name: string) => {
	return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=76219c903b8e8758872f9c9ead42c0de`);
      const data = await res.json();
      if (data.message) {
        dispatch(getWeatherError(data.message))
      } else {
        dispatch(newWeather(data))
      }
    } catch(e) {
      dispatch(getWeatherError("Error"))
    }
	};
};

export const hourlyWeather = (name: string) => {
	return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=76219c903b8e8758872f9c9ead42c0de`);
      const data = await res.json();
      if (data.message) {
        dispatch(getWeatherError(data.message))
      } else {
        dispatch(getHourlyWeather(data))
      }
    } catch(e) {
      dispatch(getWeatherError("Error"))
    }
	};
};
