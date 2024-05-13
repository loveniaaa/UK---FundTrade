import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Category, Content, Footbar, Gap, HeaderPage } from '../../../components'
import LinearGradient from 'react-native-linear-gradient'

const HistoryCU = ({navigation, user, route}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}>
        <HeaderPage label="History" />
        <ScrollView style={styles.containerWrapp}showsVerticalScrollIndicator={false}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category label='All' backgroundColor='#DEDAE1' textColor='#3E3C3C' onPress={() => navigation.replace('History')}/>
            <Category label='Cash' backgroundColor='#DEDAE1' textColor='#3E3C3C' onPress={() => navigation.replace('HistoryCash')}/>
            <Category label='Transfer' backgroundColor='#DEDAE1' textColor='#3E3C3C' onPress={() => navigation.replace('HistoryTF')}/>
            <Category label='CU' />
          </ScrollView>
          <Gap height={25} />
          <View>
            <Content type='historyCU' />
            <Content type='historyCU' />
            <Content type='historyCU' />
            <Content type='historyCU' />
            <Content type='historyCU' />
            <Content type='historyCU' />
          </View>
        </ScrollView>
      </LinearGradient>
      <Footbar type='history' navigation={navigation}/>
    </View>
  )
}

export default HistoryCU

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lineargradient: {
        flex: 1,
    },
    containerWrapp: {
      marginHorizontal: 25,
      marginBottom: 100,
    }
})