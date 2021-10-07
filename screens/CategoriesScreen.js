import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { DATA } from '../models/data';

const CategoriesScreen = ({ navigation }) => {
	const renderItem = (item) => {
		return (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('MealScreen', {
						id: item.item.id,
					});
				}}
				activeOpacity={0.6}
				style={{ ...styles.gridItem, ...{ backgroundColor: item.item.color } }}
			>
				<View>
					<Text style={styles.text}>{item.item.name}</Text>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<View style={styles.con}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				numColumns={2}
				keyExtracter={(item) => itme.id}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	con: {
		flex: 1,
	},
	gridItem: {
		width: '45%',
		height: 100,
		margin: 10,
		padding: 10,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 6,
		shadowColor: '#efefef',
		shadowRadius: 5,
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
	text: {
		fontSize: 20,
		fontFamily: 'open-sans-bold',
	},
});
export default CategoriesScreen;
