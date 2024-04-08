import { ReactNode } from "react";
import { Text, View } from "react-native";
import styles from "./style";

type Props = {
  date: string;
  icon: ReactNode;
  temperature: string;
  windforce: string;
};

const DailyWeather = (props: Props) => {
  return (
    <View style={styles.mainBorder}>
      <Text style={styles.textDay}>{props.date}</Text>
      {props.icon}
      <Text style={styles.textTemperature}>{props.temperature}</Text>
      <Text style={styles.textWind}>{props.windforce}</Text>
    </View>
  );
};

export default DailyWeather;
