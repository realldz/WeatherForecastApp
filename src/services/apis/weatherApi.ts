import { fetchWeatherApi } from 'openmeteo';
import { WeatherParamsExtend } from '@/interfaces/ForecastParams';

const URL = 'https://api.open-meteo.com/v1/forecast';
const getTemperature = async (params: WeatherParamsExtend) => {
	return fetchWeatherApi(URL, params);
};

export { getTemperature };
