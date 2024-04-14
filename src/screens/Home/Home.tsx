import { SafeScreen } from '@/components/template';
import { ScrollView, View } from 'react-native';
import styles from '@/screens/Home/style';
import { DailyWeather } from '@/components/molecules';

const mockData = [
	{
		date: 'Wed 16',
		icon: <></>,
		temperature: '22 ',
		wind: '1-5 km/h',
	},
	{
		date: 'Thu 17',
		icon: <></>,
		temperature: '25 ',
		wind: '0-3 km/h',
	},
	{
		date: 'Fri 18',
		icon: <></>,
		temperature: '19 ',
		wind: '4-8 km/h',
	},
];
const Home = () => {
	return <SafeScreen>
		<ScrollView style={styles.mainBorder}>
			<View style={styles.dailyView}>
				{mockData.map((item, index) => <DailyWeather
					key={index}
					date={item.date}
					icon={item.icon}
					temperature={item.temperature}
					wind={item.wind}
				/>)}
			</View>
		</ScrollView>
	</SafeScreen>;
};

export default Home;
