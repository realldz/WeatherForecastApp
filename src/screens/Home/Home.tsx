import { SafeScreen } from '@/components/template';
import { ScrollView, View } from 'react-native';
import styles from '@/screens/Home/style';
import { WeatherStatus } from '@/components/molecules';
import { WeatherIcon } from 'weather-react-icons';

const mockData = [
	{
		date: 'Wed 16',
		icon: <WeatherIcon iconId={200} name="owm" />,
		temperature: '22 ',
		wind: '1-5 km/h',
	},
	{
		date: 'Thu 17',
		icon: <WeatherIcon iconId={200} name="owm" />,
		temperature: '25 ',
		wind: '0-3 km/h',
	},
	{
		date: 'Fri 18',
		icon: <WeatherIcon iconId={200} name="owm" />,
		temperature: '19 ',
		wind: '4-8 km/h',
	},
];
const Home = () => {
	return (
		<SafeScreen>
			<ScrollView style={styles.mainBorder}>
				<View style={styles.dailyView}>
					{mockData.map((item, index) => (
						<WeatherStatus
							key={index}
							date={item.date}
							icon={item.icon}
							temperature={item.temperature}
							wind={item.wind}
						/>
					))}
				</View>
			</ScrollView>
		</SafeScreen>
	);
};

export default Home;
