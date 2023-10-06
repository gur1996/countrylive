import { StyleSheet, Text, View, Colors } from 'react-native'
import React, { useEffect } from 'react'


const Splashscreen = ({navigation}) => {
 useEffect(() => {
     setTimeout(() =>{
navigation.navigate('Home')
     }, 2000)

 },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Country Live</Text>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({

    container:{
        flex:1,
      backgroundColor:"#FF3A3A",
        justifyContent:"center",
        alignItems:"center"
    },
    heading:{
        fontSize:30,
        color:"white",
        fontWeight:"bold"
    }
})