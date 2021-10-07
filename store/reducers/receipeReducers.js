import { TOGGLE_FAVOURITE, SET_FILTER } from '../types/receipe';
import { MEALS } from '../../models/data';

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favourite: [],
};

const mealReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE_FAVOURITE:
			const existingIndex = state.favourite.findIndex(
				(meal) => meal.id === payload
			);
			if (existingIndex >= 0) {
				const updatedFavMeals = [...state.favourite];
				updatedFavMeals.splice(existingIndex, 1);
				return { ...state, favourite: updatedFavMeals };
			} else {
				const meal = state.meals.find((meal) => meal.id === payload);
				return { ...state, favourite: state.favourite.concat(meal) };
			}
		case SET_FILTER:
			return {
				...state,
				filteredMeals: state.meals.filter((meal) => {
					if (payload.glutenFree && !meal.isGlutenFree) {
						return false;
					}
					if (payload.lactoseFree && !meal.isLactoseFree) {
						return false;
					}
					if (payload.vegetarian && !meal.isVegetarian) {
						return false;
					}
					if (payload.vegan && !meal.isVegan) {
						return false;
					}
					return true;
				}),
			};
		default:
			return state;
	}
};

export default mealReducer;
