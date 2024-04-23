import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import styles from './style';

type Props = {
	date: string;
	icon: ReactNode;
	temperature: string;
	wind: string;
};

const WeatherStatus = (props: Props): React.JSX.Element => {
	const { date, icon, temperature, wind } = props;
	return (
		<View style={styles.mainBorder}>
			<Text style={[styles.textBase, styles.textDay]}>{date}</Text>
			{icon}
			<Text style={[styles.textBase, styles.textTemperature]}>
				{temperature}
			</Text>
			<Text style={[styles.textBase, styles.textWind]}>{wind}</Text>
		</View>
	);
};

export default WeatherStatus;
