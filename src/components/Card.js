import {StyleSheet, Text, TextBase, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';

const Card = ({item, navigation}) => {
  const handleReadMore = () => {
    const url = item.url; 
    navigation.navigate('WebView', { url });
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : 'https://static.toiimg.com/thumb/msid-104159327,width-1070,height-580,imgsize-15130,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
        }}
        style={styles.img}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.details}>
        <Text style={styles.publishedate}>
          Publish Date:
          {item.publishedAt.toLocaleString('en-GB', {timeZone: 'UTC'})}
        </Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
      <TouchableOpacity
        style={styles.btn} onPress={handleReadMore}  >
        <Text style={styles.btntext}>Read More</Text>
      </TouchableOpacity>
      <View style={styles.source}>
        <Text style={styles.sourcetext}>{item.source.name}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    color: 'black',
  },
  description: {
    fontSize: 12,
  },
  author: {
    fontSize: 10,
    color: '#FF3A3A',
  },
  publishedate: {
    fontSize: 10,
  },

  details: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  source: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
    margin: 20,
    backgroundColor: '#FF3A3A',
    borderTopRightRadius: 10,
  },
  sourcetext: {
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#FF3A3A',
    padding: 6,
    borderRadius: 5,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  btntext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
});
