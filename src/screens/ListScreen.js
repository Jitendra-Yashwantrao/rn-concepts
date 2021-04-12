import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 21 },
    { name: 'Friend #3', age: 22 },
    { name: 'Friend #4', age: 23 },
    { name: 'Friend #5', age: 24 },
    { name: 'Friend #6', age: 25 },
    { name: 'Friend #7', age: 26 },
    { name: 'Friend #8', age: 27 },
    { name: 'Friend #9', age: 28 }
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => <ListItem {...item} />}
    // renderItem={({ item }) => {
    //   return (
    //     <Text style={styles.textStyle}>
    //       {item.name} - Age {item.age}
    //     </Text>
    //   );
    // }}
    />
  );
};

const ListItem = ({ name }) => {
  return (
    <Swipeable
      onSwipeableLeftOpen={() => console.log('Swiped Leftt')}
      onSwipeableRightOpen={() => console.log('Swiped right')}
      renderLeftActions={(progress, dragx) => {
        console.log("progress", progress);
        console.log("dragx", dragx);
        return (

          < LeftItem />

        )
      }}
      renderRightActions={(progress, dragx) => {
        console.log("progress", progress);
        console.log("dragx", dragx);
        return (

          < RightItem />

        )
      }} >
      <View style={styles.listItem}>
        <Text style={styles.description}>{name}</Text>
      </View>
    </Swipeable >
  );
};

const LeftItem = () => {
  return (
    <View style={styles.leftItem}>
      <Text style={[styles.leftItemText]}>Open</Text>
    </View>
  );
};

const RightItem = () => {
  return (
    <View style={styles.rightItem}>
      <TouchableOpacity style={styles.deleteButtonStyle}>
        <Text style={styles.textButtonStyle}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.archiveButtonStyle}>
        <Text style={styles.archiveTextButtonStyle}>Archive</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10
  },


  leftItem: {
    flex: 1,
    backgroundColor: '#76a21e',
    justifyContent: 'center',
  },
  archiveButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#3e64ff',
  },
  archiveTextButtonStyle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  textButtonStyle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#c00000',
  },
  rightItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  leftItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#fff',
  },
  listItemWrapper: {
    flex: 1,
    flexDirection: 'column',
  },

  listItem: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
    flex: 1,
    height: 60,
    backgroundColor: '#fff',
  },
  item2: {
    flex: 4,
    justifyContent: 'center',
  },
  item: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textBtn: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    width: '80%',
    margin: 5,
    alignSelf: 'center',
  },
  description: {
    fontSize: 16,
    color: '#000',
  },
});

export default ListScreen;
