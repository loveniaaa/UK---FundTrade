import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Content, Footbar, HeaderPage } from '../../components'

const Discount = ({navigation}) => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}>
          <HeaderPage label="Discount" />
          <ScrollView>
            <View style={styles.containerWrapp}>
              <Content type="discount" />
              <Content type="discount" />
              <Content type="discount" />
              <Content type="discount" />
              <Content type="discount" />
              <Content type="discount" />
              <Content type="discount" />
              <Content type="discount" />
            </View>
          </ScrollView>
        </LinearGradient>
        <Footbar type='discount' navigation={navigation}/>
    </View>
  )
}

export default Discount

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lineargradient: {
        flex: 1,
    },
    containerWrapp: {
      alignItems:'center',
    }
})