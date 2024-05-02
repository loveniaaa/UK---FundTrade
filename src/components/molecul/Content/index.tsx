import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Poster } from '../../../assets'

const Content = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Image source={Poster} style={styles.poster}/>
    </TouchableOpacity>
  )
}

export default Content

const styles = StyleSheet.create({
  container: {
    width: 155,
    height: 220,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  poster: {
    width: 155,
    height: 220,
    borderRadius: 10,
  }
})