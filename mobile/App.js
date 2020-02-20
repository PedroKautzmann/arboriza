import React from 'react';
import { StyleSheet } from 'react-native';

import Routes from './src/routes';
import api from './src/services/api';

export default function App() {
  async function handleSubmit() {
    const response = await api.get('/');
  }

  return (
    <>
      <Routes />
    </>
  );
}
