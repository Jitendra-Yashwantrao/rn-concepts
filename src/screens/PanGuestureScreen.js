import React, { useCallback, useRef } from 'react'

import { View, StyleSheet, Animated } from 'react-native'

import { PanGestureHandler } from 'react-native-gesture-handler'



const PanGuestureScreen = () => {

    const txref = useRef(new Animated.Value(0));
    const tyref = useRef(new Animated.Value(0));

    const guestureEventHandler = useCallback(
        // console.log('event ');
        Animated.event(
            [{
                nativeEvent: {
                    translationX: txref.current,
                    translationY: tyref.current,
                },
            }],
            {
                useNativeDriver: true
            },
        ),
        []
    );

    const rotate = tyref.current.interpolate({
        inputRange: [-100, 100],
        outputRange: ['-25deg', '25deg'],
    })



    return (
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={guestureEventHandler} >
                <Animated.View style={
                    {
                        height: 200,
                        width: 200,
                        backgroundColor: 'blue',
                        transform: [
                            { translateX: txref.current },
                            { translateY: tyref.current },
                            { rotate },
                        ]

                    }
                }></Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: "space-around",
        flex: 1,
        flexDirection: "column"
    },
    circle: {
        padding: 50,
        borderRadius: 100,
        height: 150,
        width: 150,
        backgroundColor: "#c00000"
    }
})

export default PanGuestureScreen;