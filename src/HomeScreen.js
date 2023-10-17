import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Card from './components/Card';

const HomeScreen = ({navigation}) => {
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [Select, setSelect] = useState(0);
  const [Category, setCategory] = React.useState([
    {
      id: 1,
      name: 'Top Headlines',
      category: 'general',
    },
    {
      id: 2,
      name: 'Business',
      category: 'business',
    },
    {
      id: 3,
      name: 'Entertainment',
      category: 'entertainment',
    },
    {
      id: 4,
      name: 'Health',
      category: 'health',
    },
    {
      id: 5,
      name: 'Sports',
      category: 'sports',
    },
    {
      id: 6,
      name: 'Science',
      category: 'science',
    },
    {
      id: 7,
      name: 'Technology',
      category: 'technology',
    },
  ]);
  const getData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=f8a31a4e2fe24f4abbe58742ca2256f5`,
    );
    const data = await response.json();
    setData(data.articles);
    setLoading(false);
  };
  const getData2 = async category => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=f8a31a4e2fe24f4abbe58742ca2256f5&category=${category}`,
    );
    const data = await response.json();
    setData(data.articles);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Header navigation={navigation} />
      <View>
        <FlatList
          style={styles.menu}
          data={Category}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={
                  index === Select ? styles.menuitems : styles.menuitemsnonselct
                }
                onPress={() => {
                  setSelect(index);
                  getData2(Category[index].category);
                }}>
                <Text style={styles.menuitemtext}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <>
        {Loading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={'red'} size={36} />
          </View>
        ) : (
          <View>
            <FlatList
              data={Data}
              renderItem={({item, index}) => {
                return <Card item={item} navigation={navigation} />;
              }}
            />
          </View>
        )}
      </>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  menu: {
    padding: 10,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuitems: {
    padding: 8,
    marginRight: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  menuitemsnonselct: {
    padding: 8,
    marginRight: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  menuitemtext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
