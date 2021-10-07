import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import FilterNavigator from './FilterNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName='Main Home'
			screenOptions={{ headerShown: false }}
		>
			<Drawer.Screen name='Main Home' component={TabNavigator} />
			<Drawer.Screen name='Filters' component={FilterNavigator} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
