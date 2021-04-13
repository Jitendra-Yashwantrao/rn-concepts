import React from 'react'
import FadeInView from "~/components/FadeInView"
import { View, Text, StyleSheet } from 'react-native'
import TopDownView from '~/components/TopDownView'

const AnimationScreen = () => {

    return (
        <View style={{
            alignItems: 'center',

            flex: 1
        }}>
            <TopDownView>
                <View style={styles.ball}></View>
            </TopDownView>

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

const styles = StyleSheet.create({
    ball: {

        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: 'black',
        backgroundColor: 'red',

    }
})
export default AnimationScreen;