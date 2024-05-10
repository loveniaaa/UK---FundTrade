import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CountAdd, CountMin, Poster, Star } from '../../assets'
import { Button, Content, Footbar, Gap, HeaderPage } from '../../components';
import LinearGradient from 'react-native-linear-gradient';

const ContentPage = ({navigation}) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(12000);
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
    setPrice(prevPrice => prevPrice + 12000);
  };

  const decreementCount = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
      setPrice(prevPrice => prevPrice - 12000);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}>
        <Image source={Poster} style={styles.poster}/>
        <HeaderPage backButton={true} onPress={() => navigation.goBack()}/>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Gap height={180} />
          <View style={styles.label}>
              <Text style={styles.textLabel}>HOT DOG</Text>
              <Text style={styles.textLabelHarga}>{price}</Text>
              <Gap height={20} />
              <View style={styles.wrapp}>
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                  <Star />
                  <Text style={{color: '#938282', marginLeft: 2, fontSize: 10,}}>x5</Text>
                </View>
                <View style={styles.countWrapp}>
                  <TouchableOpacity style={styles.count} activeOpacity={0.8} onPress={decreementCount}><CountMin /></TouchableOpacity>
                  <Text>{count}</Text>
                  <TouchableOpacity style={styles.count} activeOpacity={0.8} onPress={incrementCount}><CountAdd /></TouchableOpacity>
                </View>
              </View>
          </View>
          <Gap height={32} />
          <Button type='title' label='The Unklab Choir'/>
          <Gap height={22} />
          <Text style={styles.textMore}>More From The Unklab Choir</Text>
          <Gap height={10} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <Content type="content1"/>
              <Content type="content1"/>
              <Content type="content1"/>
              <Content type="content1"/>
              <Content type="content1"/>
              <Content type="content1"/>
              <Content type="content1"/>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
      <Footbar type='content1'/>
    </View>
  )
}

export default ContentPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lineargradient: {
    flex: 1,
  },
    poster: {
        width: 415,
        height: 345,
        position: 'absolute',
    },
    label: {
        backgroundColor: '#ffffff',
        width: 290,
        height: 130,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLabel: {
        color: '#000000',
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
    },
    textLabelHarga: {
        color: '#000000',
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    count: {
      backgroundColor: '#5E2590',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      borderRadius: 5,
    },
    countWrapp: {
      flexDirection: 'row',
      width: 60,
      justifyContent: 'space-between',
      backgroundColor: '#B172E8',
      borderRadius: 5,
    },
    wrapp: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      width: 250,
    },
    textMore: {
      textAlign: 'left' ,
      width: 350,
      fontFamily: 'Montserrat-MediumItalic',
      fontSize: 12,
      color: '#E5DFDF',
    },
})