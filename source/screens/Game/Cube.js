import 'react-native-gesture-handler';

import {useRef, useEffect, useState} from 'react'
import { StyleSheet, Text, View, Animated, Button, Alert } from 'react-native';
import { Directions, FlingGestureHandler, PanGestureHandler, RectButton, TapGestureHandler  } from 'react-native-gesture-handler';
import { Rect } from 'react-native-svg';


export function Cube() {
    const rotateBottom = useRef(new Animated.Value(0)).current;

    function _moveBottom(duration, delay) {
        Animated.timing(rotateBottom, {
            toValue: 1,
            duration: duration,
            delay: delay,
            useNativeDriver: false
          }).start();
    }

    function _moveTop(duration, delay) {
        Animated.timing(rotateBottom, {
            toValue: 0,
            duration: duration,
            delay: delay,
            useNativeDriver: false
          }).start();
    }

    function moveTop() {
        rotateBottom.setValue(1)
        _moveTop(200, 0)
    }

    function moveBottom() {
        rotateBottom.setValue(0)
        _moveBottom(200, 0)
    }

	return (
		<View style={[styles.container]}>
            <FlingGestureHandler
                enabled
                direction={Directions.UP}
                onEnded={() => {
                    moveTop()
                }}
            >
                <View style={{height: 150, width: 250, backgroundColor: 'rgba(22, 22, 22, 0.1)', position: 'relative', top: 300, zIndex: 5}} />
            </FlingGestureHandler>

            <Animated.View
                style={[
                    styles.faceTop,
                    {
                        transform: [
                            { rotateX: rotateBottom.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["45deg", "-45deg"],
                              }) },
                            { rotateY: "0deg" }
                        ]
                    },
                    {
                        top: rotateBottom.interpolate({
                            inputRange: [0, 1],
                            outputRange: [300, 450],
                        })
                    },
                ]}
            />
            
            <Animated.View
                style={[
                    styles.faceBack,
                    {
                        transform: [
                            { rotateX: rotateBottom.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["90deg", "45deg"],
                              }) },
                        ]
                    },
                    {
                        top: rotateBottom.interpolate({
                            inputRange: [0, 1],
                            outputRange: [350, 300],
                        })
                    },
                ]}
            />

            <Animated.View
                style={[
                    styles.faceFront,

                    {
                        transform: [
                            { rotateX: rotateBottom.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["-45deg", "0deg"],
                              }) },
                        ]
                    },
                    {
                        top: rotateBottom.interpolate({
                            inputRange: [0, 1],
                            outputRange: [450, 300],
                        })
                    },
                    {opacity: rotateBottom.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                    })}
                ]}
            />

            <View style={{height: 500}} />

            <FlingGestureHandler
                enabled
                direction={Directions.DOWN}
                onEnded={() => {
                    moveBottom()
                }}
            >
                <View style={{height: 150, width: 250, backgroundColor: 'rgba(22, 22, 22, 0.1)', position: 'relative', top: -150, zIndex: 5}} />
            </FlingGestureHandler>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
    faceTop: {
        width: 200,
        height: 200,
        backgroundColor: '#1F1F1F',
        position: 'absolute',
        top: 250,
        zIndex: 1
    },
    faceBack: {
        width: 200,
        height: 200,
        backgroundColor: '#2E2E2E',
        position: 'absolute',
        zIndex: 0
    },
    faceFront: {
        width: 200,
        height: 200,
        backgroundColor: '#2E2E2E',
        position: 'absolute',
        top: 400,
        zIndex: 0
    },
});
