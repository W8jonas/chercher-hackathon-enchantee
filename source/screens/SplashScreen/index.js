import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

// Modules

// Assets
// import SplashImg from '../../assets/splash.png'
import chercher from './chercher-logo.jpeg'

// Functions

// Components
import { routesPaths } from '../../routes/routesPaths';

export function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(routesPaths.game)
        }, 1000);
    }, [])

    return (
        <View style={styles.container}>
            <Image source={chercher} style={{ height: 142/1.1, width: 242/1.1 }} />

            {/* <Image source={chercher} style={{ height: 3240/50, width: 5760/50, position: 'absolute', left: 10, bottom: 10 }} /> */}

            <View
                style={{
                    height: 130,
                    width: 130,
                    borderRadius: 130,
                    position: 'absolute',
                    top: -50,
                    left: -50,
                    backgroundColor: '#003466'
                }} 
            />

            <View
                style={{
                    height: 130,
                    width: 130,
                    borderRadius: 130,
                    position: 'absolute',
                    bottom: -50,
                    right: -50,
                    backgroundColor: '#003466'
                }} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
})
