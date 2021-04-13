import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

const TopDownView = (props) => {

    const ballAnim = useRef(new Animated.ValueXY(0, 0)).current;

    console.log('ball animation', ballAnim.getTranslateTransform());
    useEffect(() => {
        Animated.spring(
            ballAnim,
            {
                toValue: { x: 150, y: 550 },
                useNativeDriver: true,
            }
        ).start((props) => {

            console.log('TopDownView finish called', ballAnim.getTranslateTransform(), "props", props)
        }
        );
    }, [ballAnim])

    return (
        <Animated.View style={{ transform: ballAnim.getTranslateTransform() }
        } >
            { props.children}
        </Animated.View >
    );
}

export default TopDownView;