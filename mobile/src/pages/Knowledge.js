import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native';

import api from '../services/api';

import main from '../styles';
import plant from '../img/plant.png';

export default function Plant() {
  const [trees, setTrees] = useState([]);
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRecommended() {
    try {
      setLoading(true);

      const response = await api.get('/trees', {
        params: {
          recommended: 1,
          forbidden: 0
        }
      });

      setTrees(response.data);
      setType('Recomendadas');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  }

  async function handleForbidden() {
    try {
      setLoading(true);
      const response = await api.get('/trees', {
        params: {
          forbidden: 1
        }
      });

      setTrees(response.data);
      setType('Proibidas');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  }

  // async function loadMore() {
  //   const response = await api.get('/trees?page=2');

  //   setTrees([...trees, response.data]);
  // }

  return (
    <View style={main.container}>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button} onPress={handleRecommended}>
          <Text style={styles.text}>Recomendadas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleForbidden}>
          <Text style={styles.text}>Proibidas</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator color='#ccc' size='large' />
      ) : (
        <>
          <Text style={styles.type}>{type}</Text>
          <FlatList
            style={{ marginBottom: 10 }}
            // onEndReachedThreshold={0.2}
            // onEndReached={loadMore}
            data={trees}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <View style={styles.listView}>
                <Text style={styles.listItem}>{item.name}</Text>
                <Text style={styles.species}>{item.species}</Text>
                <Image
                  source={{
                    uri: `http://192.168.4.42:3333/files/${item.avatar.path}`
                  }}
                  accessibilityLabel={'Foto'}
                  style={styles.img}
                />
                <Text style={styles.recommendationsTitle}>Altura: 2m</Text>
                <Text style={styles.recommendationsTitle}>Recomendações</Text>
                <Text style={styles.recommendations}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id lectus porttitor dolor iaculis tempor eget at
                  nisl. Proin erat nibh, iaculis at turpis sed, gravida interdum
                  urna. Donec at eleifend ipsum, et lacinia dui. Phasellus
                  consectetur quis urna non hendrerit. Vestibulum mattis nisi a
                  tortor convallis, vitae maximus turpis volutpat. Donec ut mi
                  eget elit condimentum gravida. Mauris scelerisque lorem erat,
                  sed semper enim suscipit sit amet. Nulla facilisis at risus
                  quis euismod. Integer mi risus, euismod vitae malesuada non,
                  faucibus vitae dui. Phasellus et pretium tortor. Vestibulum
                  augue massa, dictum ac augue a, accumsan interdum leo.
                </Text>
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#e16262',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 15
  },
  text: {
    color: 'white',
    fontSize: 16,
    padding: 10,
    textAlign: 'center'
  },
  type: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    color: '#666'
  },
  listView: {
    alignItems: 'center',
    marginTop: 5,
    paddingBottom: 5,
    borderColor: '#eee',
    borderWidth: 1,
    width: 300,
    alignSelf: 'center',
    borderRadius: 4
  },
  listItem: {
    fontSize: 20
  },
  species: {
    fontSize: 16,
    color: '#ccc',
    fontStyle: 'italic'
  },
  img: {
    marginTop: 10,
    width: 270,
    height: 200,
    borderRadius: 2,
    resizeMode: 'stretch'
  },
  recommendationsTitle: {
    fontSize: 14,
    marginTop: 10,
    paddingHorizontal: 10,
    alignSelf: 'flex-start'
  },
  recommendations: {
    fontSize: 13,
    textAlign: 'justify',
    color: '#666',
    paddingHorizontal: 10,
    marginTop: 5
  }
});
