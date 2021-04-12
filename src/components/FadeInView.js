import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

const FadeInView = (props) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 10000,
                useNativeDriver: true,
            }
        ).start((props) => {
            console.log('finish called', props)
        });
    }, [fadeAnim])

    return (
        <Animated.View
            style={
                {
                    ...props.style,
                    opacity: fadeAnim
                }
            }

        >
            {props.children}
        </Animated.View>
    );
}

export default FadeInView;