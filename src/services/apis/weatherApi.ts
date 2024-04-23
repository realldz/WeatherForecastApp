import { fetchWeatherApi } from 'openmeteo';
import { WeatherParamsExtend } from '@/interfaces/ForecastParams';

const { API_URL } = process.env;
const getTemperature = async (params: WeatherParamsExtend) => {
	return fetchWeatherApi(API_URL!, params);
};

export { getTemperature };
