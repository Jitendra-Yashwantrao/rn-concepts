import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

const UseEffectScreen = () => {

    console.log('called');
    const [message, setText] = useState("Enter message here");

    useEffect(() => {
        console.log('use effect called', message);

        // const id = setInterval(() => {
        //     console.log('inside set interval', message)
        // }, 2000);

        // console.log('id', id);
        return () => {
            // clearInterval(id)
            console.log('clean up called', message)
        }
    }, [message]);

    return (<View>
        <Text style={styles.label} >You Entered : {message}</Text>
        <TextInput style={styles.input}
            value={message}
            onChangeText={setText}
        />

    </View>)
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        margin: 15,
        borderWidth: 1,
        fontWeight: 'bold'
    },
    label: {
        margin: 25,
        fontWeight: 'bold'
    }
})
export default UseEffectScreen;