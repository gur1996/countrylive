import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
const Header = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.heading}>Country Live</Text>
      <TouchableOpacity
       onPress={()=> navigation.navigate('Search')}><MagnifyingGlassIcon color="white" size={24} /></TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    Container:{
        backgroundColor:"#FF3A3A",
        borderBottomWidth:1,
        borderBottomColor:"#FF3A3A",
        padding:18,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    heading:{
        fontSize:17,
        fontWeight:'bold',
        color:'white'
    }
})