import {StyleSheet, Text, View, Colors, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.heading}
        animation={'fadeInDownBig'}
        duration={2000}>
        Country Live
      </Animatable.Text>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF3A3A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
