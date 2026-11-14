import { AppProvider } from '@/context/AppContext';
import AppNavigator from '@/navigation/AppNavigator';
import React from 'react';


export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}