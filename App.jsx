import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Splashscreen from './src/Splashscreen';
import NewsViewr from './src/components/NewsViewr';
import Search from './src/components/Search';

const App = () => {
  console.log("new ")
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splashscreen}  />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewsViewr" component={NewsViewr} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
