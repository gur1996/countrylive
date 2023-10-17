import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import Card from './Card';

const Search = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  const searchNews = async (text) => {
    setSearchText(text);
    if (text.length > 3) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=f8a31a4e2fe24f4abbe58742ca2256f5&q=${text}`
      );
      const data = await response.json();
      setData(data.articles);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={'white'} size={20} style={styles.backicon}/>
        </TouchableOpacity>
        <TextInput 
          placeholder="Search Here (type min 4 characters...)"
          value={searchText}
          placeholderTextColor={'white'}
          onChangeText={(text) => {
            searchNews(text);
          }}
        />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return <Card item={item} navigation={navigation} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  backicon:{
    marginLeft:10
  }
});

export default Search;
