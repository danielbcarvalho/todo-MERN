import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export const Todo = ({ item, remove }) => {
  return (
    <View style={styles.item}>
      <Text>{item}</Text>
      <Button
        title="X"
        color='red'
        onPress={() => remove(item)}
      />
    </View>
  )
}

//export default Todo

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
    margin: 8,
    padding: 8
  }
})

