import React, { useLayoutEffect } from 'react';
import { DATA } from '../models/data';
import MealList from '../layouts/MealList';
import { useSelector } from 'react-redux';

const CategoryMealScreen = ({ navigation, route }) => {
	const { id } = route.params;
	const myData = DATA.find((ele) => ele.id === id);

	const { filteredMeals } = useSelector((state) => state.meal);

	const items = filteredMeals?.filter(
		(meal) => meal.categoryIds.indexOf(id) >= 0
	);

	useLayoutEffect(() => {
		navigation.setOptions({ title: myData.name });
	}, []);
	return <MealList items={items} navigation={navigation} />;
};

export default CategoryMealScreen;
