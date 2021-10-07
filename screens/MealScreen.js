import React, { useLayoutEffect } from 'react';
import {
	ScrollView,
	View,
	Image,
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { MEALS } from '../models/data';
import { saveToFav } from '../store/actions/receipeActions';
import { useDispatch } from 'react-redux';

const MealScreen = ({ navigation, route }) => {
	const { id, isFav } = route.params;
	const data = MEALS.find((meal) => meal.id === id);

	const dispatch = useDispatch();

	const saveFavourites = () => {
		dispatch(saveToFav(id, data));
	};
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={saveFavourites}>
					<Text>
						{isFav ? (
							<AntDesign name='star' size={24} color='black' />
						) : (
							<Feather name='star' size={24} color='white' />
						)}
					</Text>
				</TouchableOpacity>
			),
		});
	}, [navigation, isFav, saveFavourites]);
	return (
		<ScrollView>
			<Image source={{ uri: data.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<Text>{data.duration}m</Text>
				<Text>{data.complexity.toUpperCase()}</Text>
				<Text>{data.affordability.toUpperCase()}</Text>
			</View>
			<Text style={styles.titleText}>{data.title}</Text>
			<Text style={styles.title}>Ingredients</Text>
			{data.ingredients.map((ingredient) => (
				<View key={ingredient} style={styles.listItem}>
					<Text>{ingredient}</Text>
				</View>
			))}
			<Text style={styles.title}>Steps</Text>
			{data.steps.map((step) => (
				<View key={step} style={styles.listItem}>
					<Text>{step}</Text>
				</View>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		textAlign: 'center',
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10,
	},
	titleText: {
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 20,
	},
});
export default MealScreen;
