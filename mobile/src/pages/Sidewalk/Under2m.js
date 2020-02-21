import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import main from '../../styles';

import flowers from '../../img/flowers.jpg';
import foliage from '../../img/foliage.jpg';
import grass from '../../img/grass.jpg';

export default function Under2m() {
  return (
    <View style={main.container}>
      <Text style={styles.warning}>
        Não plante árvores! Faça canteiro para cultivar os tipos abaixo
      </Text>

      <View style={styles.listView}>
        <Text style={styles.imgText}>Flores</Text>
        <Image source={flowers} style={styles.img} />

        <Text style={styles.imgText}>Folhagens</Text>
        <Image source={foliage} style={styles.img} />

        <Text style={styles.imgText}>Grama</Text>
        <Image source={grass} style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  warning: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    paddingHorizontal: 10,
    marginTop: 5
  },
  listView: {
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 5,
    borderColor: '#eee',
    borderWidth: 1,
    width: 300,
    alignSelf: 'center',
    borderRadius: 4
  },
  imgText: {
    margin: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#445c3c'
  },
  img: {
    width: 250,
    height: 150,
    resizeMode: 'cover',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 3
  }
});
