import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../../atom'


const HeaderPage = ({label, backButton, onPress}) => {
  return (
    <View style={styles.container}>
      {backButton && (<Button type="icon-only" icon="icon-back" onPress={onPress}/>)}
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  )
}

export default HeaderPage

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingVertical: 37,
        flexDirection: 'row',
        alignItems: 'center',
      },
      label: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
        color: '#020202',
        marginLeft: 26,
      },
})