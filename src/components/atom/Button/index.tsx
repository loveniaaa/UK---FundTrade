import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { BackButton, Google, Poster } from '../../../assets';


const Button = ({label, type, onPress, icon}) => {
    if (type === 'google') {
        return (
            <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <View style={styles.inside}><Google style={styles.icon}/><Text style={styles.buttonText}>{label}</Text></View>
                </TouchableOpacity>
            </View>
        );
    }

    if (type === 'icon-only') {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                {icon === 'icon-back' && <BackButton />}
            </TouchableOpacity>
        );
    }

    if (type === 'title') {
        return (
            <TouchableOpacity style={styles.buttonTitle} onPress={onPress} activeOpacity={0.8}>
                <View style={styles.inside}><Image source={Poster} style={styles.image}/><Text style={styles.buttonTextTitle}>{label}</Text></View>
            </TouchableOpacity>
        )
    }

  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View><Text style={styles.buttonText}>{label}</Text></View>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 43,
        borderWidth: 1,
        borderColor: '#5E2590',
        borderRadius: 30,
        backgroundColor: '#5E2590',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginVertical: 14,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
    },
    buttonTextTitle: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
    },
    inside: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    buttonTitle: {
        width: 350,
        height: 43,
        borderRadius: 30,
        backgroundColor: '#D1B4EE',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginVertical: 14,
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10,
    }
})