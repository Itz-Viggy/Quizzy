import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import CreateAccountScreen from './CreateAccount';
import FlashcardsScreen from './Flashcards';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ title: 'Create Account' }} />
      <Stack.Screen name="Flashcards" component={FlashcardsScreen} options={{ title: 'Flashcards' }} />
    </Stack.Navigator>
  );
}
