import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import main from '../styles';
import plant from '../img/plant.png';
import book from '../img/book.png';

export default function Info({ navigation }) {
  return (
    <View style={main.container}>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate('Plant');
          }}
        >
          <Image source={plant} style={styles.img} />
          <Text style={styles.title}>Plantar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate('Knowledge');
          }}
        >
          <Image source={book} style={styles.img} />
          <Text style={styles.title}>Conhecer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
    tintColor: '#445c3c'
  },
  title: {
    fontSize: 22,
    color: '#445c3c',
    padding: 15
  }
});
