import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  return (
      <View style={styles.container}>

        <TextField text/>
        

        <ConditonalCard error = {true}/>
        <ConditonalCard loading = {true}/>
        <ConditonalCard title = "title" />

        <Card title = "Title"/>
        <Card title = "Title w/ button" buttonTitle = 'hello'/>

        <ButtonComponent title={'Welcome!'} />

        <CounterButton 
          title={`Press to increment:${count}`}
          onIncrement= {() => setCount(count + 1)}/>

        <Text>Open up App.js to start working on your app!</Text>

        <StatusBar style="auto" />
      </View>
  );
}

// Text input field 
const TextField = ({text}) => (
  <View>
    <TextInput
      value = {text}
      style={{ fontSize: 42, color: 'steelblue' }}
      placeholder="Type here..."
      
    />
  </View>

)

/** Conditional rendering: Creates a card that will render a button if passed a title.
*/ 
const Card = ({title, buttonTitle}) => (
  <View>
    <Text style={{ fontSize: 60 }}>{title}</Text>
    {buttonTitle ? <Button title={buttonTitle} /> : null}
  </View>
)

/** Conditional Rendering: rendering with if/else statements */
const ConditonalCard = ({ loading, error, title }) => {
  let content

  if (error) {
    content = <Text style={{ fontSize: 24, color: 'red' }}>Error</Text>
  } else if (loading) {
    content = <Text style={{ fontSize: 24, color: 'gray' }}>Loading...</Text>
  } else {
    content = (
      <View>
        <Text style={{ fontSize: 60 }}>{title}</Text>
      </View>
    )
  }

  return <View>{content}</View>

}


//Component for an incrementing button
function CounterButton ({ title, onIncrement}){
  return <Button title={title} onPress={onIncrement}/>
}

function ButtonComponent ({ title }) {
  return(
    <View>
      <Button title={title} color="#1ACDA5"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
