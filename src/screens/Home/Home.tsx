import { SafeScreen } from '@/components/template';
import { ScrollView, Text, View } from 'react-native';

function Home() {
	return (
		<SafeScreen>
			<ScrollView>
				<View style={{ flex: 1, backgroundColor: 'red' }}>
					<Text>Đây là 1 text</Text>
				</View>
			</ScrollView>
		</SafeScreen>
	);
}

export default Home;
