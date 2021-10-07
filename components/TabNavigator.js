import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealNavigator from './MealNavigator';
import FavouriteScreen from '../screens/FavouriteScreen';
import { Feather, Fontisto, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: '#e91e63',
				headerStyle: {
					backgroundColor: '#f4511e',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Tab.Screen
				name='Home Screen'
				component={MealNavigator}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: () => <Feather name='home' size={24} color='black' />,
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name='Favourite'
				component={FavouriteScreen}
				options={{
					tabBarLabel: 'Favourite',
					tabBarIcon: () => (
						<Fontisto name='favorite' size={24} color='black' />
					),
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
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	icon: {
		marginHorizontal: 15,
	},
});

export default TabNavigator;
