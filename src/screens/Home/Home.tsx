import { SafeScreen } from '@/components/template';
import { ScrollView, Text } from 'react-native';
import styles from '@/screens/Home/style';

function Home() {
	return (
		<SafeScreen>
			<ScrollView style={styles.mainBorder}>
				<Text style={styles.textPreview}>This is a text</Text>
			</ScrollView>
		</SafeScreen>
	);
}

export default Home;
