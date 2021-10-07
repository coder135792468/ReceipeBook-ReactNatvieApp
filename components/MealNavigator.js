import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealScreen from '../screens/MealScreen';
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
			}}
		>
			<Screen
				name='Category'
				component={CategoriesScreen}
				options={{
					title: 'Select a Category',
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
			<Screen
				swipeEnabled={false}
				name='MealScreen'
				component={CategoryMealScreen}
			/>
			<Screen name='DetailScreen' component={MealScreen} />
		</Navigator>
	);
};

const styles = StyleSheet.create({
	icon: {
		marginHorizontal: 10,
	},
});
export default MealNavigator;
