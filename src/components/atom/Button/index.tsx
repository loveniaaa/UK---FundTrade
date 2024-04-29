import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Google } from '../../../assets';


const Button = ({label, type, onPress}) => {
    if (type === 'google') {
        return (
            <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <View style={styles.inside}><Google style={styles.icon}/><Text style={styles.buttonText}>{label}</Text></View>
                </TouchableOpacity>
            </View>
        );
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
    inside: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    }
})