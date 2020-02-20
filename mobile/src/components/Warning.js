import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function Warning({ message }) {
  return (
    <View style={styles.warning}>
      <Text style={styles.titleWarning}>ATENÇÃO!</Text>
      <Text style={styles.textWarning}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  warning: {
    // flex: 1,
    backgroundColor: '#ffcc00',
    alignItems: 'center',
    height: 80
  },
  titleWarning: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5
  },
  textWarning: {
    // marginTop: 5,
    fontSize: 18,
    // fontWeight: 'bold',
    paddingBottom: 5,
    textAlign: 'center'
  }
});
