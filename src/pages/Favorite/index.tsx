import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Content, Footbar, HeaderPage } from '../../components'
import LinearGradient from 'react-native-linear-gradient'

const Favorite = ({navigation}) => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}>
          <HeaderPage label="Favorite"/>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containerWrapp}>
              <Content type="favorite"/>
              <Content type="favorite"/>
              <Content type="favorite"/>
              <Content type="favorite"/>
              <Content type="favorite"/>
              <Content type="favorite"/>
              <Content type="favorite"/>
              <Content type="favorite"/>
            </View>
          </ScrollView>
        </LinearGradient>
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
    },
    containerWrapp: {
      alignItems: 'center',
    }
})