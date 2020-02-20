import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Warning from '../components/Warning';

import main from '../styles';

export default function Plant({ navigation }) {
  const [message, setMessage] = useState(
    'Plante árvores apenas nos meses de Maio até Agosto'
  );

  return (
    <View style={main.container}>
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={styles.view}>
          <Text style={styles.title}>Calçada</Text>

          <View style={styles.viewButton}>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10 }}
              style={styles.button}
              onPress={() => {
                navigation.navigate('Under2m');
              }}
            >
              <Text style={styles.textButton}>Até 2 metros de largura</Text>
              <Icon
                style={{ marginRight: 10 }}
                name='arrow-right'
                size={25}
                color='#445c3c'
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewButton}>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10 }}
              style={styles.button}
              onPress={() => {
                navigation.navigate('Over2m');
              }}
            >
              <Text style={styles.textButton}>Mais de 2 metros de largura</Text>
              <Icon
                style={{ marginRight: 10 }}
                name='arrow-right'
                size={25}
                color='#445c3c'
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.view}>
          <Text style={styles.title}>Pátio</Text>

          <View style={styles.viewButton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Quadrante Leste-Norte</Text>
              <Icon
                style={{ marginRight: 10 }}
                name='arrow-right'
                size={25}
                color='#445c3c'
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewButton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Lembre-se da fossa-filtro</Text>
              <Icon
                style={{ marginRight: 10 }}
                name='arrow-right'
                size={25}
                color='#445c3c'
              />
            </TouchableOpacity>
          </View>

          <View style={styles.viewButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Neighbor')}
            >
              <Text style={styles.textButton}>Lembre-se do vizinho</Text>
              <Icon
                style={{ marginRight: 10 }}
                name='arrow-right'
                size={25}
                color='#445c3c'
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Warning message={message} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  view: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 4
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: '#445c3c',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderStyle: 'solid',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  textButton: {
    color: '#445c3c',
    fontSize: 14,
    paddingLeft: 10
  }
});
