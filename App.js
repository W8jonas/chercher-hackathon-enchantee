import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Index } from './source'


export default function App() {
	return (
		<View style={styles.container}>
			<Index />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
