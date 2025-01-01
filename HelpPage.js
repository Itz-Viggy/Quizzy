import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function HelpPage({ navigation, setBugReports }) {
  const [page, setPage] = useState('');
  const [description, setDescription] = useState('');

  const submitBug = () => {
    if (page && description) {
      setBugReports((prev) => [...prev, { page, description }]);
      alert('Bug report submitted successfully!');
      setPage('');
      setDescription('');
      navigation.navigate('Home'); // Redirect to Home
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report a Bug</Text>
      <TextInput
        style={styles.input}
        placeholder="Page where the bug occurred"
        value={page}
        onChangeText={setPage}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe the bug"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={submitBug}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textArea: {
    height: 100,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
