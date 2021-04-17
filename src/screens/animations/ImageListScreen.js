import React from 'react'
import { View, Text, Image } from 'react-native'
import Deck from '~/components/Deck'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const ImageListScreen = () => {

    const imageList = [
        { id: 1, text: 'Card #1', uri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png' },
        { id: 2, text: 'Card #2', uri: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png' },
        { id: 3, text: 'Card #3', uri: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png' },
        { id: 4, text: 'Card #4', uri: 'https://homepages.cae.wisc.edu/~ece533/images/barbara.png' },
        { id: 5, text: 'Card #5', uri: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png' },
        { id: 6, text: 'Card #6', uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png' },
        { id: 7, text: 'Card #7', uri: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png' },
        { id: 8, text: 'Card #8', uri: 'https://homepages.cae.wisc.edu/~ece533/images/monarch.png' },
    ];

    const renderImage = (item) => {
        console.log("item received", item)
        console.log("item text", item.text)
        return (

            <Card>
                <Card.Title>{item.text}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: item.uri }} />

                <Button icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW' />

            </Card>
        )
    }

    return (
        <View>
            <Deck data={imageList} renderCard={renderImage}  >

            </Deck>
        </View>
    )
}

export default ImageListScreen;