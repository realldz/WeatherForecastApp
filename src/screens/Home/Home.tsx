import { SafeScreen } from '@/components/template';
import { ScrollView, Text } from 'react-native';
// eslint-disable-next-line import/extensions
import styles from '@/screens/Home/style.ts';
// eslint-disable-next-line import/extensions
import { getTemperature } from '@/services/apis/weatherApi.ts';
// eslint-disable-next-line import/extensions
import { WeatherParamsExtend } from '@/interfaces/ForecastParams.ts';

function Home() {
	const params: WeatherParamsExtend = {
		latitude: 54,
		longitude: 12,
	};
	getTemperature(params)
		.then(res => console.log(res))
		.catch(res => res);
	return (
		<SafeScreen>
			<ScrollView style={styles.mainBorder}>
				<Text style={styles.textPreview}>This is a text</Text>
			</ScrollView>
		</SafeScreen>
	);
}

export default Home;
