import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Cube } from './Cube';

import setaEsq from './setaEsq.png'
import coin from './coin.png'
import bg from './bg.png'


const vermTrans = 'rgba(206, 17, 39, 0.68)'


export function Index() {
	return (
		<ImageBackground source={bg} style={styles.container}>

            <View style={styles.header}>
                <Image source={setaEsq}  style={{height: 22, width: 12}} />
                <Text style={styles.headerTitle}> 1 - París </Text>

                <View style={{flexDirection: 'row'}}>
                    <Image source={coin}  style={{height: 27, width: 27}} />
                    <Text style={styles.headerText}> 10 </Text>
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={{padding: 5, backgroundColor: vermTrans, borderRadius: 20, color: 'white', fontSize: 16}}> 1 </Text>

                <View style={{width: '80%', backgroundColor: vermTrans, borderRadius: 8, elevation: 5, height: 35, justifyContent: 'center', paddingHorizontal: 5}}>
                    <Text style={{color: 'white', fontSize: 17}} >Culinária típica francesa?</Text>
                </View>
            </View>
            <Text style={{position: 'relative', top: 50, color: 'white', fontSize: 17, alignSelf: 'flex-start', paddingHorizontal: 90}}>Texto francaes?</Text>

            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', top: 230, paddingHorizontal: 10}}>
                
                <View style={{alignItems: 'center'}}>
                    <Image source={coin}  style={{height: 27, width: 27, marginBottom: 10}} />
                    <Text style={styles.headerText}>3</Text>
                </View>

                <Text style={{color: 'white', fontSize: 60, fontWeight: 'bold'}} >10</Text>

                <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}} > </Text>
            </View>

            <GestureHandlerRootView>
                <Cube />
            </GestureHandlerRootView>
		</ImageBackground>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
        paddingHorizontal: 10
	},
    header: {
        marginTop: 150,
        paddingHorizontal: 12,
        borderRadius: 10,
        height: 44,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 69, 135, 0.6)',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
    },
    questionContainer: {
        flexDirection: 'row', 
        width: '90%', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        position: 'relative',
        top: 50,
    }
});
