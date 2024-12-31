import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const flashcards = [
  { term: '1', definition: '...' },
  { term: '2', definition: '...' },
  { term: '3', definition: '...' },
  { term: '4', definition: '....' },
  { term: '5', definition: '...' },
  { term: '6', definition: '...' },
  { term: '7', definition: '...' },
  { term: '8', definition: '...' },
  { term: '9', definition: '...' },
  { term: '10', definition: '...' },
];

export default function FlashcardsScreen({ navigation }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showDefinition, setShowDefinition] = useState(false);

  const handleAnswer = (correct) => {
    setAnswers([...answers, correct]);
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      setShowDefinition(false);
    }
  };

  const getResultColor = (score) => {
    if (score <= 3) 
        return 'red';
    if (score <= 7) 
        return 'yellow';
    return 'green';
  };

  const score = answers.filter((answer) => answer).length;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>Home</Text>
      </TouchableOpacity>
      {answers.length === flashcards.length ? (
        <View style={styles.resultContainer}>
          <Text style={[styles.resultText, { color: getResultColor(score) }]}>
            You got {score}/10 correct!
          </Text>
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>
            {showDefinition ? flashcards[currentCard].definition : flashcards[currentCard].term}
          </Text>
          <TouchableOpacity style={styles.flipButton} onPress={() => setShowDefinition(!showDefinition)}>
            <Text style={styles.flipButtonText}>Flip</Text>
          </TouchableOpacity>
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.button, styles.correctButton]} onPress={() => handleAnswer(true)}>
              <Text style={styles.buttonText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.incorrectButton]} onPress={() => handleAnswer(false)}>
              <Text style={styles.buttonText}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  flipButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  flipButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
  },
  correctButton: {
    backgroundColor: 'green',
  },
  incorrectButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
