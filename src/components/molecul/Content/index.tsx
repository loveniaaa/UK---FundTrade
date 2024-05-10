import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Chart1, ClockIcon, Love1, Poster, Star} from '../../../assets';
import {Gap} from '../../atom';

const Content = ({type, onPress}) => {
  if (type === 'favorite') {
    return (
      <TouchableOpacity style={styles.containerFav} activeOpacity={0.8}>
        <Image source={Poster} style={styles.posterFav} />
        <View>
          <View style={styles.containerFavLabel}>
            <Text style={styles.labelFav}>Hot Dog</Text>
            <Text style={styles.labelFav1}>The Unklab Choir</Text>
          </View>
          <Gap height={25} />
          <View style={styles.containerFavIcon}>
            <Star />
            <Love1 />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  if (type === 'discount') {
    return (
      <TouchableOpacity style={styles.containerFav} activeOpacity={0.8}>
        <Image source={Poster} style={styles.posterFav} />
        <View>
          <View style={styles.containerFavLabel}>
            <Text style={styles.labelFav}>Hot Dog</Text>
            <Text style={styles.labelFav1}>The Unklab Choir</Text>
          </View>
          <Gap height={25} />
          <View style={styles.containerFavIcon}>
            <Star />
            <Text style={styles.labelFav1}>Rp6000/2pcs</Text>
            <Chart1 />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  if (type === 'history') {
    return (
      <TouchableOpacity style={styles.containerHis} activeOpacity={0.8}>
        <View style={styles.hurufWrapp}>
          <Text style={styles.huruf}>C</Text>
          <Text style={styles.huruf}>A</Text>
          <Text style={styles.huruf}>S</Text>
          <Text style={styles.huruf}>H</Text>
        </View>
        <View style={styles.containerHis1}>
          <View style={styles.time}>
            <Text style={styles.hurufDate}>Wed, Sept 1st, 2024</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ClockIcon />
              <Text style={styles.hurufTime}>16.21</Text>
            </View>
          </View>
          <Gap height={4} />
          <View style={styles.containerHisLabel}>
            <View style={styles.garis} />
            <View>
              <Text style={styles.labelFav}>Hot Dog</Text>
              <Text style={styles.labelFav1}>The Unklab Choir</Text>
            </View>
          </View>
          <Gap height={4} />
          <View style={styles.ccontainerHisIcon}>
            <Star />
            <Text style={styles.labelFavHarga}>1pcs</Text>
            <Text style={styles.labelFavHarga}>Rp12.000</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  if (type === 'historyCash') {
    return (
      <TouchableOpacity style={styles.containerHis} activeOpacity={0.8}>
        <View style={styles.hurufWrapp}>
          <Text style={styles.huruf}>C</Text>
          <Text style={styles.huruf}>A</Text>
          <Text style={styles.huruf}>S</Text>
          <Text style={styles.huruf}>H</Text>
        </View>
        <View style={styles.containerHis1}>
          <View style={styles.time}>
            <Text style={styles.hurufDate}>Wed, Sept 1st, 2024</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ClockIcon />
              <Text style={styles.hurufTime}>16.21</Text>
            </View>
          </View>
          <Gap height={4} />
          <View style={styles.containerHisLabel}>
            <View style={styles.garis} />
            <View>
              <Text style={styles.labelFav}>Hot Dog</Text>
              <Text style={styles.labelFav1}>The Unklab Choir</Text>
            </View>
          </View>
          <Gap height={4} />
          <View style={styles.ccontainerHisIcon}>
            <Star />
            <Text style={styles.labelFavHarga}>1pcs</Text>
            <Text style={styles.labelFavHarga}>Rp12.000</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  if (type === 'historyTF') {
    return (
      <TouchableOpacity style={styles.containerHis} activeOpacity={0.8}>
        <View style={styles.hurufWrapp}>
          <Text style={styles.huruf}>T</Text>
          <Text style={styles.huruf}>F</Text>
        </View>
        <View style={styles.containerHis1}>
          <View style={styles.time}>
            <Text style={styles.hurufDate}>Wed, Sept 1st, 2024</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ClockIcon />
              <Text style={styles.hurufTime}>16.21</Text>
            </View>
          </View>
          <Gap height={4} />
          <View style={styles.containerHisLabel}>
            <View style={styles.garis} />
            <View>
              <Text style={styles.labelFav}>Hot Dog</Text>
              <Text style={styles.labelFav1}>The Unklab Choir</Text>
            </View>
          </View>
          <Gap height={4} />
          <View style={styles.ccontainerHisIcon}>
            <Star />
            <Text style={styles.labelFavHarga}>1pcs</Text>
            <Text style={styles.labelFavHarga}>Rp12.000</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  if (type === 'historyCU') {
    return (
      <TouchableOpacity style={styles.containerHis} activeOpacity={0.8}>
        <View style={styles.hurufWrapp}>
          <Text style={styles.huruf}>C</Text>
          <Text style={styles.huruf}>U</Text>
        </View>
        <View style={styles.containerHis1}>
          <View style={styles.time}>
            <Text style={styles.hurufDate}>Wed, Sept 1st, 2024</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ClockIcon />
              <Text style={styles.hurufTime}>16.21</Text>
            </View>
          </View>
          <Gap height={4} />
          <View style={styles.containerHisLabel}>
            <View style={styles.garis} />
            <View>
              <Text style={styles.labelFav}>Hot Dog</Text>
              <Text style={styles.labelFav1}>The Unklab Choir</Text>
            </View>
          </View>
          <Gap height={4} />
          <View style={styles.ccontainerHisIcon}>
            <Star />
            <Text style={styles.labelFavHarga}>1pcs</Text>
            <Text style={styles.labelFavHarga}>Rp12.000</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  if (type === 'content1') {
    return (
      <TouchableOpacity
        style={styles.containerContent1}
        activeOpacity={0.7}
        onPress={onPress}>
        <Image source={Poster} style={styles.posterContent1} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image source={Poster} style={styles.poster} />
    </TouchableOpacity>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    width: 155,
    height: 220,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
  },
  containerContent1: {
    width: 155,
    height: 220,
    borderRadius: 10,
    marginLeft: 10,
  },
  poster: {
    width: 155,
    height: 220,
    borderRadius: 10,
  },
  posterContent1: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  containerFav: {
    width: 360,
    height: 110,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  posterFav: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  containerFavLabel: {
    marginLeft: 10,
  },
  labelFav: {
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
    fontSize: 18,
  },
  labelFav1: {
    fontFamily: 'Montserrat-Italic',
    color: '#000000',
    fontSize: 14,
  },
  containerFavIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    width: 220,
  },
  containerHis: {
    width: 360,
    height: 110,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  huruf: {
    color: '#000000',
    fontSize: 9,
    fontFamily: 'Montserrat-Bold',
  },
  hurufWrapp: {
    paddingHorizontal: 10,
  },
  garis: {
    borderWidth: 1.25,
    height: 40,
    borderColor: '#000000',
    marginHorizontal: 15,
  },
  containerHisLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ccontainerHisIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    width: 270,
    alignItems: 'center',
  },
  containerHis1: {
    marginLeft: 10,
  },
  labelFavHarga: {
    fontSize: 12,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBoldItalic',
  },
  hurufDate: {
    color: '#5E2590',
    fontSize: 10,
    fontFamily: 'Montserrat-MediumItalic',
  },
  hurufTime: {
    color: '#757171',
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    marginLeft: 5,
  },
});
