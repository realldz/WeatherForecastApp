import { SafeScreen } from '@/components/template';
import { ScrollView, Text } from 'react-native';
import styles from '@/screens/Home/style';
import { getTemperature } from '@/services/apis/weatherApi';
import { WeatherParamsExtend } from '@/interfaces/ForecastParams';

function Home() {
	const params: WeatherParamsExtend = {
		latitude: 54,
		longitude: 12,
	};
	getTemperature(params)
		.then(res => console.log('res.then:::', res))
		.catch(res => console.log('res.catch:::', res));
	return (
		<SafeScreen>
			<ScrollView style={styles.mainBorder}>
				<Text style={styles.textPreview}>This is a text</Text>
			</ScrollView>
		</SafeScreen>
	);
}

export default Home;
