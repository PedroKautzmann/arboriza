import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView
} from 'react-native';

import main from '../styles';
import tree from '../img/tree1.png';

export default function Main({ navigation }) {
  return (
    <SafeAreaView style={main.container}>
      <View style={styles.imageView}>
        <Image source={tree} style={styles.img} />
        <Text style={styles.title}>ARBORIZA SÃO LEO</Text>
      </View>

      <View style={styles.textView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Info');
          }}
        >
          <Text style={styles.info}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('About');
          }}
        >
          <Text style={styles.info}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageView: {
    marginTop: 30,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    flex: 1,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 28,
    color: '#445c3c',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#445c3c',
    borderRadius: 5,
    marginHorizontal: 10
  },
  info: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#fff'
  }
});
