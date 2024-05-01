import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Discount, History, Home, HomePurple, Love, PeopleIcon } from '../../../assets'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Footbar = ({type, onPress}) => {
    if (type==='home') {
        return(
            <View style={styles.container}>
                <TouchableOpacity><Discount /></TouchableOpacity>
                <TouchableOpacity><Love /></TouchableOpacity>
                <TouchableOpacity style={styles.home}><View style={styles.home1}><HomePurple /></View></TouchableOpacity>
                <TouchableOpacity><History /></TouchableOpacity>
                <TouchableOpacity><PeopleIcon /></TouchableOpacity>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity><Discount /></TouchableOpacity>
        <TouchableOpacity><Love /></TouchableOpacity>
        <TouchableOpacity><Home/></TouchableOpacity>
        <TouchableOpacity><History /></TouchableOpacity>
        <TouchableOpacity><PeopleIcon /></TouchableOpacity>
    </View>
  )
}

export default Footbar

const styles = StyleSheet.create({
    container: {
        width: 410,
        height: 70,
        backgroundColor: '#481B6B',
        borderRadius: 30,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    home: {
        width: 60,
        height: 60,
        backgroundColor: '#ffffff',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -60,
    },
    home1: {
        width: 55,
        height: 55,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#481B6B',
    },
})