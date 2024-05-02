import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Footbar } from '../../components'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}></LinearGradient>
        <Footbar type='profile' navigation={navigation}/>
    </View>
  )
}

export default Profile

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