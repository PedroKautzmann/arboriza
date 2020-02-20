import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import logo from '../img/logo_prefeitura.png';
import main from '../styles';

export default function About() {
  return (
    <View style={main.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>
          A árvore é um importante componente do meio ambiente urbano.
          Proporciona sombra, beleza e oxigênio. No entanto, plantada em local
          inadequado, pode gerar grandes prejuízos e até acidentes fatais.
        </Text>
        <Text style={styles.text}>
          Por isto, a Prefeitura de São Leopoldo, através da Secretaria do Meio
          Ambiente (SEMMAM) e do Departamento de Arborização Urbana (DAU),
          oferece ao cidadão leopoldense e público em geral o aplicativo{' '}
          <Text style={{ fontWeight: 'bold' }}>ARBORIZA SÃO LÉO</Text>.
        </Text>
        <Text style={styles.text}>
          Esta importante ferramenta visa orientar o plantio de árvores nos
          espaços públicos (calçada, praças, escolas) e privados (pátio).
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#445c3c' }}>
          Aproveite!
        </Text>
      </View>

      <View style={styles.imgView}>
        <Image style={styles.img} source={logo} />
        <Image style={styles.img} source={logo} />
        <Image style={styles.img} source={logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    padding: 15
  },
  text: {
    fontSize: 16,
    color: '#445c3c',
    marginBottom: 20,
    textAlign: 'justify'
  },
  imgView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
});
