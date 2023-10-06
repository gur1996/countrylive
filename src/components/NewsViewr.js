import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const NewsViewr = ({navigation, route}) => {
    const {url} = route.params;
  return (
    <WebView source={{ uri: url }} style={{ flex: 1 }} />
  )
}

export default NewsViewr

const styles = StyleSheet.create({})