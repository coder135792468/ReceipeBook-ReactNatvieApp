import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import DrawerNavigator from './components/DrawerNavigator';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import mealReducer from './store/reducers/receipeReducers';

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});
};

const rootReducer = combineReducers({
	meal: mealReducer,
});

const store = createStore(rootReducer);

function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={console.warn}
			/>
		);
	}
	return (
		<Provider store={store}>
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		</Provider>
	);
}

export default App;
