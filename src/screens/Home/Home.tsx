import { SafeScreen } from '@/components/template';
import { ScrollView, View } from 'react-native';
import styles from '@/screens/Home/style';
import { DailyWeather } from '@/components/molecules';

const Home = () => {
	return (
		<SafeScreen>
			<ScrollView style={styles.mainBorder}>
				<View>
					<DailyWeather
						date="Wed 16"
						icon={<></>}
						temperature="22 "
						wind="1-5 km/h"
					/>
				</View>
			</ScrollView>
		</SafeScreen>
	);
};

export default Home;
