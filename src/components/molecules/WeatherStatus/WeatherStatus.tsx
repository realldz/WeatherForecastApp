import { ReactNode } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

type Props = {
	date: string;
	icon: ReactNode;
	temperature: string;
	wind: string;
};

const DailyWeather = (props: Props) => {
	return (
		<View style={styles.mainBorder}>
			<Text style={[styles.textBase, styles.textDay]}>{props.date}</Text>
			{props.icon}
			<Text style={[styles.textBase, styles.textTemperature]}>{props.temperature}</Text>
			<Text style={[styles.textBase, styles.textWind]}>{props.wind}</Text>
		</View>
	);
};

export default DailyWeather;
