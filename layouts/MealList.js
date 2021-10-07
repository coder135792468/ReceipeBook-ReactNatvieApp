import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ReceipeCard from '../components/ReceipeCard';

const MealList = (props) => {
	const fav = useSelector((state) => state.meal.favourite);

	return (
		<View>
			<ScrollView>
				{props.items?.map((itemData) => (
					<ReceipeCard
						key={itemData.id}
						title={itemData.title}
						image={itemData.imageUrl}
						duration={itemData.duration}
						complexity={itemData.complexity}
						affordability={itemData.affordability}
						onSelectMeal={() => {
							props.navigation.navigate('DetailScreen', {
								id: itemData.id,
								isFav: fav.some((ele) => ele.id === itemData.id),
							});
						}}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default MealList;
