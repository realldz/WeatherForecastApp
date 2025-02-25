import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Example, Home, Startup } from '@/screens';
import { useTheme } from '@/theme';

import type { ApplicationStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator
				key={variant}
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Startup" component={Startup} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Example" component={Example} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default ApplicationNavigator;
