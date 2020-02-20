import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import Warning from '../../components/Warning';

import tree from '../../img/falling_tree.png';
import main from '../../styles';

export default function Neighbor() {
  const [message, setMessage] = useState(
    'A sua árvore pode cair na casa do vizinho'
  );

  return (
    <View style={main.container}>
      <View style={styles.view}>
        <Image source={tree} style={styles.img} />
      </View>

      <Warning message={message} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 250,
    height: 250
  }
});
