import React from 'react'
import FadeInView from '../components/FadeInView'
import { View, Text } from 'react-native'

const AnimationScreen = () => {

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        }}>
            <FadeInView style={{
                backgroundColor: 'powderblue',
                width: 250,
                height: 75
            }} >
                <Text style={{
                    fontSize: 28,
                    textAlign: 'center',
                    margin: 10
                }}>Welcome</Text>
            </FadeInView>
        </View>
    );
}

export default AnimationScreen;