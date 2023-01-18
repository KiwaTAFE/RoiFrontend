import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

// Import navigation and screens
import ViewStaffScreen from '../screens/ViewStaffScreen';

// Import styling and components
import Styles from "../styles/MainStyle";

const Stack = createStackNavigator();

export default function StaffNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="ViewStaff"
			screemOptions={{
				headerShown: true,
				headerBackTitle: "Back",
				headerStyle: Styles.headerBar,
				headerTitleStyle: Styles.headerBarTitle,
			}}>
			<Stack.Screen
				name="ViewStaff"
				component={ViewStaffScreen}
				options={{ title: "View All Staff" }} />
			</Stack.Navigator>
	);
}