import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Poster } from '../../assets';
import { Footbar, Gap, HeaderPage } from '../../components';
import CheckBox from 'react-native-check-box';

const Checkout = ({ navigation, isChecked }) => {
  const [toggleCheckBoxList, setToggleCheckBoxList] = useState(
    Array.isArray(isChecked) ? isChecked.map(() => isChecked) : []
  );
  const [showAddressInput, setShowAddressInput] = useState(false); // State to control address input visibility
  const [address, setAddress] = useState(''); // State to store address input value

  const handleCheckBoxClick = (index) => {
    const newToggleCheckBoxList = [...toggleCheckBoxList];
    if (index === 0) {
      const allChecked = newToggleCheckBoxList.every((isChecked) => isChecked);
      newToggleCheckBoxList.fill(!allChecked);
    } else {
      newToggleCheckBoxList[index] = !newToggleCheckBoxList[index];
    }
    setToggleCheckBoxList(newToggleCheckBoxList);
    if (index === 2) {
      // If "Di antar" checkbox is clicked, show the address input
      setShowAddressInput(!showAddressInput);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderPage label="Checkout" backButton={true} onPress={() => navigation.goBack('')} />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.containerWrapp}>
            <Text style={styles.labelTitle}>The Unklab Choir</Text>
            <Gap height={5} />
            <View style={{ flexDirection: 'row' }}>
              <Image source={Poster} style={styles.poster} />
              <View>
                <Text style={styles.labelContent}>Hot Dog</Text>
                <Text style={styles.labelContentHarga}>Rp12.000</Text>
              </View>
            </View>
          </View>
          <Gap height={25} />
          <View style={styles.containerWrapp}>
            <Text style={styles.labelTitle}>Opsi Pengambilan</Text>
            <Gap height={15} />
            <View style={styles.opsiPeng}>
              <CheckBox
                onClick={() => handleCheckBoxClick(1)}
                isChecked={toggleCheckBoxList[1]}
              />
              <Text style={[styles.labelContentHarga, { marginLeft: 5 }]}>Ambil di Tempat</Text>
            </View>
            <Gap height={5} />
            <View style={styles.opsiPeng}>
              <CheckBox
                onClick={() => handleCheckBoxClick(2)}
                isChecked={toggleCheckBoxList[2]}
              />
              <Text style={[styles.labelContentHarga, { marginLeft: 5 }]}>Di antar</Text>
            </View>
            {showAddressInput && (
              <View style={styles.addressInputContainer}>
                <TextInput
                  style={styles.addressInput}
                  placeholder="Masukkan alamat pengiriman"
                  placeholderTextColor={'#020202'}
                  value={address}
                  onChangeText={(text) => setAddress(text)}
                />
              </View>
            )}
          </View>
          <Gap height={25} />
          <View style={styles.containerWrapp}>
            <Text style={styles.labelTitle}>Opsi Pembayaran</Text>
            <Gap height={15} />
              <View style={styles.opsiPeng}>
                <CheckBox
                  onClick={() => handleCheckBoxClick(1)}
                  isChecked={toggleCheckBoxList[1]}
                />
                <Text style={[styles.labelContentHarga, { marginLeft: 5 }]}>Bayar di tempat</Text>
              </View>
            </View>
          </View>
      </ScrollView>
      <Footbar type="checkout" label="Buat Pesanan" navigation={navigation}/>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    alignItems: 'center',
  },
  poster: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  labelTitle: {
    color: '#000000',
    marginLeft: 15,
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
  },
  labelContent: {
    color: '#020202',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
  },
  labelContentHarga: {
    color: '#020202',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
  containerWrapp: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    width: 380,
    borderRadius: 15,
  },
  opsiPeng: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressInputContainer: {
    marginTop: 10,
  },
  addressInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
