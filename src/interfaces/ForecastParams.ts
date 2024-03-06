interface WeatherParamsBase {
	latitude: number;
	longitude: number;
}

interface WeatherParamsExtend extends WeatherParamsBase {
	hourly?: string;
	elevation?: number;
	daily?: string[];
	current?: string[];
	temperature_unit?: string;
	wind_speed_unit?: string;
	timeformat?: string;
	timezone?: string;
	past_days?: number;
	forecast_days?: number;
	forecast_hours?: number;
	forecast_minutely_15?: number;
	past_hours?: number;
	past_minutely?: number;
	start_date?: number;
	models?: string[];
	cell_selection?: string;
	api_key?: string;
}

export type { WeatherParamsBase, WeatherParamsExtend };
