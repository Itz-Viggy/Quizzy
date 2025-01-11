import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page!</Text>

      {/* Flashcards Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Flashcards')}
      >
        <Text style={styles.buttonText}>Flashcards</Text>
      </TouchableOpacity>

   
      <TouchableOpacity
        style={styles.helpButton}
        onPress={() => navigation.navigate('Help')}
      >
        <Text style={styles.helpButtonText}>Help</Text>
      </TouchableOpacity>

     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MultipleChoice')}>
        <Text style={styles.buttonText}>Multiple Choice</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Matching')}>
        <Text style={styles.buttonText}>Matching</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007BFF',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  helpButton: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#28A745',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  helpButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
