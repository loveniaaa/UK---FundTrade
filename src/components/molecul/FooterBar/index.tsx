import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Discount, History, Home, HomePurple, Love, PeopleIcon } from '../../../assets'

const Footbar = ({type, onPress, navigation}) => {
    if (type==='home') {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Discount')}><Discount /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}><Love /></TouchableOpacity>
                <TouchableOpacity style={styles.onPage}><View style={styles.onPage1}><HomePurple /></View></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('History')}><History /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}><PeopleIcon /></TouchableOpacity>
            </View>
        )
    } if (type==='discount') {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.onPage}><View style={styles.onPage1}><Discount /></View></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}><Love /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Home /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('History')}><History /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}><PeopleIcon /></TouchableOpacity>
            </View>
        )
    } if (type==='favorite') {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Discount')}><Discount /></TouchableOpacity>
                <TouchableOpacity style={styles.onPage}><View style={styles.onPage1}><Love /></View></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><View><Home /></View></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('History')}><History /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}><PeopleIcon /></TouchableOpacity>
            </View>
        )
    } if (type==='history') {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Discount')}><Discount /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}><Love /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Home /></TouchableOpacity>
                <TouchableOpacity style={styles.onPage}><View style={styles.onPage1}><History /></View></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}><PeopleIcon /></TouchableOpacity>
            </View>
        )
    } if (type==='profile') {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Discount')}><Discount /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}><Love /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Home /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('History')}><History /></TouchableOpacity>
                <TouchableOpacity style={styles.onPage}><View style={styles.onPage1}><PeopleIcon /></View></TouchableOpacity>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Discount')}><Discount /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}><Love /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}><Home/></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('History')}><History /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}><PeopleIcon /></TouchableOpacity>
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
        paddingHorizontal: 10,
        position: 'absolute',
    },
    onPage: {
        width: 60,
        height: 60,
        backgroundColor: '#ffffff',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -60,
    },
    onPage1: {
        width: 55,
        height: 55,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#481B6B',
    },
})