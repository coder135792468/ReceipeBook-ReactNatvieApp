import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilterScreen from '../screens/FilterScreen';

import { Ionicons } from '@expo/vector-icons';
const { Navigator, Screen } = createNativeStackNavigator();

const MealNavigator = ({ navigation }) => {
	return (
		<Navigator
			initialRouteName='Category'
			screenOptions={{
				headerStyle: {
					backgroundColor: '#f4511e',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				headerLeft: () => (
					<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
						<Ionicons
							style={styles.icon}
							name='menu-outline'
							size={24}
							color='black'
						/>
					</TouchableOpacity>
				),
			}}
		>
			<Screen
				name='FilterScreen'
				component={FilterScreen}
				options={{
					title: 'Filter Screen',
				}}
			/>
		</Navigator>
	);
};

const styles = StyleSheet.create({
	icon: {
		marginHorizontal: 10,
	},
});

export default MealNavigator;
