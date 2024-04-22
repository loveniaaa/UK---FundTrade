import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#E5D5FF', '#481B6B']}
        style={styles.linearGradient}>
        <View style={styles.bulat} />
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.bulat1} />
      </LinearGradient>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  bulat: {
    width: 220,
    height: 220,
    backgroundColor: '#5E2590',
    borderRadius: 200,
    marginHorizontal: 250,
    marginVertical: -65,
  },
  bulat1: {
    width: 380,
    height: 380,
    backgroundColor: '#481B6B',
    borderRadius: 200,
    marginHorizontal: -150,
    marginVertical: 125,
  },
  logo: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 225,
  },
});
