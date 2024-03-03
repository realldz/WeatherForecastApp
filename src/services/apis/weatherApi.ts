// eslint-disable-next-line import/no-extraneous-dependencies
import { fetchWeatherApi } from 'openmeteo';
// eslint-disable-next-line import/extensions
import { WeatherParamsExtend } from '@/interfaces/ForecastParams.ts';

const URL = 'https://api.open-meteo.com/v1/forecast';
const getTemperature = async (params: WeatherParamsExtend) => {
	return fetchWeatherApi(URL, params);
};

export { getTemperature };
