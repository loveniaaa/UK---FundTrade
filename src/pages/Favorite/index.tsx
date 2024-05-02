import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Footbar } from '../../components'
import LinearGradient from 'react-native-linear-gradient'

const Favorite = ({navigation}) => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}></LinearGradient>
        <Footbar type='favorite' navigation={navigation}/>
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lineargradient: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 30,
    },
})