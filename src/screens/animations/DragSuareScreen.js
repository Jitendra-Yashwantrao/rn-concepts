import React, { useRef } from 'react'
import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native'

const DragSquareScreen = () => {

    const pan = useRef(new Animated.ValueXY()).current;
    console.log('x,y', pan.x, pan.y)

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                console.log('x,y', pan.x, pan.y)
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },

            // moving
            onPanResponderMove: (evt, gestureState) => {
                console.log('x,y', gestureState.dx, gestureState.dy)

                pan.setValue({ x: gestureState.dx, y: gestureState.dy })
                return (evt, gestureState)

            },
            onPanResponderRelease: (evt, gestureState) => {
                // console.log('x,y', gestureState.dx, gestureState.dy, evt)
                pan.flattenOffset();
            },
        })
    ).current
    return (
        <View style={styles.container}>
            <Text style={styles.titleText} >Drag this square</Text>
            <Animated.View style={
                {
                    transform: [
                        { translateX: pan.x },
                        { translateY: pan.y }
                    ]
                }}
                {...panResponder.panHandlers}
            >
                <View style={styles.box}></View>
            </Animated.View>
        </View >
    );
}
const styles = StyleSheet.create({
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: "blue",
        borderRadius: 10,
    }
});

export default DragSquareScreen;