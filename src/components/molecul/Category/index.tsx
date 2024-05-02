import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: '#5E2590',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginRight: 10,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#ffffff'
  },
})