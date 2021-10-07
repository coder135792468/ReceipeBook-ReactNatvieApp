import { TOGGLE_FAVOURITE, SET_FILTER } from '../types/receipe';

const saveToFav = (id) => {
	return {
		type: TOGGLE_FAVOURITE,
		payload: id,
	};
};

const filter = (data) => {
	return {
		type: SET_FILTER,
		payload: data,
	};
};
export { saveToFav, filter };
