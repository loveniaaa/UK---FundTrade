import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Chart, Chart1, Discount, DiscountPurple, History, HistoryPurple, Home, HomePurple, Love, LovePurple, PeopleIcon, PeoplePurple } from '../../../assets';
import { getDatabase, ref, onValue } from "firebase/database";


const Footbar = ({type, onPress, navigation, route, label}) => {

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
                <TouchableOpacity style={styles.onPage}><View style={styles.onPage1}><DiscountPurple /></View></TouchableOpacity>
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
                <TouchableOpacity style={styles.onPage}><View style={styles.onPage1}><LovePurple /></View></TouchableOpacity>
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
                <TouchableOpacity style={styles.onPage}><View style={styles.onPage1}><HistoryPurple /></View></TouchableOpacity>
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
                <TouchableOpacity style={styles.onPage}><View style={styles.onPage1}><PeoplePurple /></View></TouchableOpacity>
            </View>
        )
    }
    if (type === 'content1') {
        return (
            <View style={styles.containerContent1}>
                <TouchableOpacity style={styles.chart} activeOpacity={0.8} onPress={() => navigation.navigate('ChartPage')}><View style={styles.chartIn}><View style={styles.iconWrapp}><Chart1 /></View><Text style={styles.textContent1}>Add To Chart</Text></View></TouchableOpacity>
                <TouchableOpacity style={styles.chart} activeOpacity={0.8} onPress={() => navigation.navigate('Checkout')}><View style={styles.chartIn}><View style={styles.iconWrapp}></View><Text style={styles.textContent1}>Buy Now</Text></View></TouchableOpacity>
            </View>
        )
    }

    if (type === 'checkout') {
        return (
            <View style={styles.containerCheck}>
                <View>
                    <Text style={styles.labelPem}>Total Pembayaran</Text>
                    <Text style={styles.labelPem}>Rp.</Text>
                </View>
                <TouchableOpacity style={styles.checkout} onPress={() => navigation.navigate('Checkout')}>
                    <View><Text style={styles.textCheck}>{label}</Text></View>
                </TouchableOpacity>
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
    containerContent1: {
        width: 410,
        height: 70,
        backgroundColor: '#481B6B',
        borderRadius: 30,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
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
    chart: {
        width: 150,
        height: 45,
        backgroundColor: '#D1B4EE',
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'row',
    },
    chartIn: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWrapp: {
        backgroundColor: '#ffffff',
        borderRadius: 50,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    textContent1: {
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        color: '#000000'
    },
    checkout: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: 150,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCheck: {
        width: 410,
        height: 70,
        backgroundColor: '#481B6B',
        borderRadius: 30,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'flex-end'
    },
    textCheck: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: '#ffffff',
    },
    labelPem: {
        fontSize: 16,
        textAlign: 'right',
        color: '#fff',
        marginRight: 10,
        fontFamily: 'Montserrat-Medium',
    }
})