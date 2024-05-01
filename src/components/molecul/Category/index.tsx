import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category</Text>
    </View>
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
  },
})