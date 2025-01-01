import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import CreateAccountScreen from './CreateAccount';
import FlashcardsScreen from './Flashcards';
import HelpPage from './HelpPage';
import AdminPage from './AdminPage';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [users, setUsers] = useState([
    { username: 'user1', password: 'pass123' },
    { username: 'testuser', password: 'testpass' },
  ]); 

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} users={users} />}
      </Stack.Screen>
      <Stack.Screen name="CreateAccount">
        {(props) => <CreateAccountScreen {...props} users={users} setUsers={setUsers} />}
      </Stack.Screen>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Flashcards" component={FlashcardsScreen} />
      <Stack.Screen name="Help" component={HelpPage} />
      <Stack.Screen name="Admin" component={AdminPage} />
    </Stack.Navigator>
  );
}
