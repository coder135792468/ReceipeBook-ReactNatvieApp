import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import FilterSwitch from '../layouts/FilterSwitch';
import { useDispatch } from 'react-redux';
import { filter } from '../store/actions/receipeActions';

const FilterScreen = ({ navigation }) => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	const dispatch = useDispatch();

	const setOptions = () => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegetarian: isVegetarian,
		};
		dispatch(filter(appliedFilters));
	};

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={setOptions}>
					<FontAwesome5 name='save' size={24} color='white' />
				</TouchableOpacity>
			),
		});
	}, [navigation, setOptions]);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch
				title='Gluten-free'
				state={isGlutenFree}
				onChange={() => setIsGlutenFree(!isGlutenFree)}
			/>
			<FilterSwitch
				title='Lactose-free'
				state={isLactoseFree}
				onChange={() => setIsLactoseFree(!isLactoseFree)}
			/>
			<FilterSwitch
				title='Vegan'
				state={isVegan}
				onChange={() => setIsVegan(!isVegan)}
			/>
			<FilterSwitch
				title='Vegetarian'
				state={isVegetarian}
				onChange={() => setIsVegetarian(!isVegetarian)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		margin: 20,
		textAlign: 'center',
	},
	switchCon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 15,
	},
});

export default FilterScreen;
