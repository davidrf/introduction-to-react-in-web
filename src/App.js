import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native';


const style = {
  borderWidth: 50,
  borderColor: '#AAAAAA'
}

const ClickedButton = (props) => {
  return (
    <Button
      title={props.clicked ? `${props.title} clicked!` : props.title} onPress={props.onPress}
    />
  )
}

const App = (props) => {
  return (
  <View style={style}>
    <ClickedButton title="Add One" onPress={props.addOne} clicked={'Add One' === props.lastClicked}/>
    <ClickedButton title="Substract One" onPress={props.substractOne} clicked={'Substract One' === props.lastClicked}/>
    <ClickedButton title="Reset" onPress={props.reset} clicked={'Reset' === props.lastClicked}/>

    <Text>{props.count}</Text>
  </View>
 )
}

export default App
