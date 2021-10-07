import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../layouts/MealList';

const FavouriteScreen = ({ navigation }) => {
	const { favourite } = useSelector((state) => state.meal);

	if (favourite.length == 0)
		return (
			<View style={styles.empty}>
				<Text style={styles.text}>You have no favourite</Text>
			</View>
		);
	return (
		<View>
			<MealList items={favourite} navigation={navigation} />
		</View>
	);
};
const styles = StyleSheet.create({
	empty: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontFamily: 'open-sans-bold',
	},
});

export default FavouriteScreen;
