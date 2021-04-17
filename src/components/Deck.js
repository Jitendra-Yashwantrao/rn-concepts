import React from 'react'
import { View, FlatList, Text } from 'react-native'

const Deck = ({ data, renderCard }) => {
    console.log(data)
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => { return renderCard(item); }}
            // renderItem={({ item }) => {
            //     return (
            //         <Text >
            //             {item.text}
            //         </Text>
            //     );
            // }}
            />

        </View>
    )
}

export default Deck;