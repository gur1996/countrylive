import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.heading}>Country Live</Text>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    Container:{
        backgroundColor:"#FF3A3A",
        borderBottomWidth:1,
        borderBottomColor:"#FF3A3A",
        padding:18
    },
    heading:{
        fontSize:17,
        fontWeight:'bold',
        color:'white'
    }
})