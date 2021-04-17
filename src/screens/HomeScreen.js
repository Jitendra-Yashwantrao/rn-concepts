import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate('Box')}
      />
      <Button
        title="Go to PanGuestureHandler demo"
        onPress={() => navigation.navigate('Pan')}
      />
      <Button
        title="Go to Use Effect demo"
        onPress={() => navigation.navigate('UE')}
      />
      <Button
        title="Go to Animation  demo"
        onPress={() => navigation.navigate('Animation')}
      />

      <Button
        title="Go to drag square demo"
        onPress={() => navigation.navigate('DragSquare')}
      />
      <Button
        title="Go to image navigator  demo"
        onPress={() => navigation.navigate('ImageList')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
