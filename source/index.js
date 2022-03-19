import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Transformation3D from './Transformation3D'

export function Index() {
	return (
		<View style={styles.container}>
            <Transformation3D />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cubeContainer: {
		height: 300,
		width: 300,
		alignItems: 'center',
		justifyContent: 'center',
	},
	father: {
		height: 300,
		width: 300,
		position: "relative"
	},
	text: {
		color: "#3a405a",
		fontSize: 30,
		fontWeight: "bold",
		backgroundColor: "transparent"
	},
	trigger: {
		position: "absolute",
		resizeMode: "contain",
		width: 110,
		backgroundColor: "transparent"
	}
});
