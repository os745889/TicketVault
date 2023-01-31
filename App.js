import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Image, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

const img = require('./assets/concert.png')

export default function App() {
  const [ticketNumber, setTicketNumber] = useState(0);
  const [pressed, setPressed] = useState(false);

  const onPress = () => {
    setPressed(true);
  }

  const onChangeText = newText => {
    setPressed(false);
    setTicketNumber(parseInt(newText));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.top}>Ticket Vault</Text>
      <TextInput style={styles.textbox} placeholder="Number Of Tickets" onChangeText={onChangeText}></TextInput>
      <Pressable style={styles.confirm} onPress={onPress}>
      <Text style={styles.text}>Find The Cost</Text></Pressable>
      
    {pressed
      ? <Text style={styles.text2}>Ticket Cost: ${ticketNumber * 99.99}</Text>
      : <Text style={styles.text2}></Text>
    }

    <Image source={img}></Image>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    fontSize: 40,
    marginBottom: 30,
  },
  confirm: {
    backgroundColor: '#f98b88',
    padding: 8,
    marginBottom: 40
  },
  text2: {
    fontSize: 25,
    marginBottom: 50,
  },
  text: {
    fontSize: 25,
  },
  textbox: {
    borderWidth: 1,
    fontSize: 25,
    padding: 8,
    marginBottom: 40,
  }
});
