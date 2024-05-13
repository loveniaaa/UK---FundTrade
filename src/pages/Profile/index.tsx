import { StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Footbar, Gap, HeaderPage } from '../../components';
import { getDatabase, ref, onValue } from "firebase/database";

const Profile = ({ navigation, route }) => {
  const { uid } = route.params;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const userRef = ref(db, `users/${uid}`);
        
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          setUser(userData);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [uid]);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}>
        <HeaderPage label="Profile" />
        <Gap height={150} />
        <View style={styles.containerWrappOut}>
          <View style={styles.containerWrappIn}>
            <View>
              <Image source={{ uri: user.photo }} style={styles.profile} />
            </View>
            <View style={styles.profileWrapp}>
              <View style={styles.textProfileWrapp}>
                <Text style={styles.textProfile}>Name : </Text>
                <Text style={styles.textProfilein}>{user.fullName}</Text>
              </View>
              <View style={styles.textProfileWrapp}>
                <Text style={styles.textProfile}>Email : </Text>
                <Text style={styles.textProfilein}>{user.email}</Text>
              </View>
              <View style={styles.textProfileWrapp}>
                <Text style={styles.textProfile}>Phone : </Text>
                <Text style={styles.textProfilein}>{user.telepon}</Text>
              </View>
              <View style={styles.textProfileWrapp}>
                <Text style={styles.textProfile}>UKM : </Text>
                <Text style={styles.textProfilein}>{user.ukm}</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
      <Footbar type='profile' navigation={navigation}/>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lineargradient: {
    flex: 1,
  },
  containerWrappOut: {
    alignItems: 'center',
  },
  containerWrappIn: {
    width: 500,
    height: 600,
    backgroundColor: '#5E2590',
    borderTopLeftRadius: 250,
    borderTopRightRadius: 250,
    alignItems: 'center',
    position: 'absolute',
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: '#ffffff',
    marginTop: -70,
  },
  profileWrapp: {
    width: 340,
    height: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginTop: 50,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  textProfile: {
    color: '#000000',
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold'
  },
  textProfilein: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold'
  },
  textProfileWrapp: {
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 5,
  }
});
