import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SearchICon } from '../../../assets'

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchICon style={styles.icon}/>
      <TextInput placeholder='Search'/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#5E2590',
        borderRadius: 25,
        height: 38,
        backgroundColor: '#D1B4EE',
        paddingHorizontal: 5,
        width: 350,
    },
})