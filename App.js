import React from 'react';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialScreen from './screens/InitialScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PerfilScreen from './screens/PerfilScreen';
import NotificationScreen from './screens/NotificationScreen';
import MainTabs from './screens/TabRouter';
import DisciplinaDetalheScreen from './screens/DisciplinaDetalheScreen'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Notificações" component={NotificationScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Disciplina" component={DisciplinaDetalheScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
