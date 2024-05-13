import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { Button } from '../../components';
import { Mail, NullPhoto, Organization, Password, Profile, Telepon } from '../../assets';
import { showMessage } from 'react-native-flash-message';

const SignUp = ({ navigation }) => {
  const [photo, setPhoto] = useState(NullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telepon, setTelepon] = useState('');
  const [ukm, setUKM] = useState('');
  const [password, setPassword] = useState('');

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
    });

    if (result.didCancel) {
        showMessage({
            message: 'Oops!, It seems you did not select a photo.',
            type: 'danger',
        })
    } else {
        const assets = result.assets[0];
        const base64 = `data:${assets.type};base64,${assets.base64}`;
        setPhoto({uri: base64});
        setPhotoForDB(base64);
      }
  };

  const onSubmit = () => {
    const data = {
      fullName: name,
      email: email,
      telepon: telepon,
      ukm: ukm,
      photo: photoForDB,
    };
    const auth = getAuth();
    const db = getDatabase();
    createUserWithEmailAndPassword(auth, email, telepon, ukm, password)
      .then(userCredential => {
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid), data);
        Alert.alert('Success', 'Registration successful. Please login.');
        navigation.navigate('Login');
      })
      .catch(error => {
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  return (
    <View style={styles.container}>
        <LinearGradient
            colors={['#E5D5FF', '#481B6B']}
            style={styles.lineargradient}
        >
        <Text style={styles.text}>Sign Up</Text>
        <ScrollView style={styles.containerWrapp} showsVerticalScrollIndicator={false}>
            <View>
                <View style={styles.profileContainer}>
                <View style={styles.profile}>
                    <View style={styles.addPhoto}>
                    <TouchableOpacity activeOpacity={0.5} onPress={getImage}>
                        <Image source={photo} style={styles.avatar} />
                    </TouchableOpacity>
                    </View>
                </View>
                </View>
                <View style={styles.input}>
                <Profile style={styles.icon} />
                <TextInput
                    placeholder="Your Name"
                    value={name}
                    onChangeText={value => setName(value)}
                />
                </View>
                <View style={styles.input}>
                <Mail style={styles.icon} />
                <TextInput
                    placeholder="Your Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
                </View>
                <View style={styles.input}>
                <Telepon style={styles.icon} />
                <TextInput
                    placeholder="Your Phone Number"
                    keyboardType="number-pad"
                    value={telepon}
                    onChangeText={value => setTelepon(value)}
                />
                </View>
                <View style={styles.input}>
                <Organization style={styles.icon} />
                <TextInput
                    placeholder="Your UKM"
                    value={ukm}
                    onChangeText={value => setUKM(value)}
                />
                </View>
                <View style={styles.input}>
                <Password style={styles.icon} />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={value => setPassword(value)}
                />
                </View>
                <Button label="Sign Up" onPress={onSubmit} />
            </View>
            </ScrollView>
        </LinearGradient>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lineargradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    paddingTop: 100,
    color: '#000000',
    fontSize: 22,
    fontWeight: '500',
    paddingBottom: 60,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 43,
    borderWidth: 1,
    borderColor: '#5E2590',
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 15,
    marginVertical: 14,
  },
  icon: {
    marginRight: 10,
  },
  profileContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  addPhoto: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },
});
