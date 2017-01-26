import React from 'react'


const style = {
  borderWidth: 50,
  borderColor: '#AAAAAA'
}

const ClickedButton = (props) => {
  return (
    <button onClick={props.onPress} >
    {props.clicked ? `${props.title} clicked!` : props.title}
    </button>
  )
}

const App = (props) => {
  return (
  <div style={style}>
    <ClickedButton title="Add One" onPress={props.addOne} clicked={'Add One' === props.lastClicked}/>
    <ClickedButton title="Substract One" onPress={props.substractOne} clicked={'Substract One' === props.lastClicked}/>
    <ClickedButton title="Reset" onPress={props.reset} clicked={'Reset' === props.lastClicked}/>

    <h1>{props.count}</h1>
  </div>
 )
}

export default App
