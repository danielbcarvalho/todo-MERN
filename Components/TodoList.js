import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from 'react-native'
import { Todo } from './Todo'

const TodoList = () => {
  const [title, setTitle] = useState('TodoList');
  const [text, setText] = useState('');
  const [list, setList] = useState(['Hello World'])

  const addItem = () => {
    const updateList = list;
    updateList.push(text);
    setList(updateList);
    setText('')
  }

  const removeItem = (index) => {
    const updateList = list.filter((todo) => todo !== index)
    setList(updateList)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <ScrollView>
        {list.map((item, index) =>
          <Todo
            key={index}
            item={item}
            index={index}
            remove={removeItem}
          />)}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
        />
        <Button
          title='Add Item'
          onPress={addItem}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 28,
    padding: 8
  }
})

export default TodoList