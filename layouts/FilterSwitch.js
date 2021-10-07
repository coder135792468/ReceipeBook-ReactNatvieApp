import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';

const FilterSwitch = (props) => {
	return (
		<View style={styles.switchCon}>
			<Text style={props.textStyle}>{props.title}</Text>
			<Switch
				trackColor={{ true: 'red', false: '#4488ff' }}
				thumbColor={'black'}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	switchCon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 15,
	},
});
export default FilterSwitch;
