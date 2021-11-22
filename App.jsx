import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import theme from "./src/theme"
import HomeScreen from './src/ui/screens/HomeScreen/HomeScreen';

export default function App() {  
  return (
    <NativeBaseProvider theme={theme}>
      <HomeScreen />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}