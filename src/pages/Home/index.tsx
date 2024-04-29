import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}>
            <ScrollView>
                
            </ScrollView>
        </LinearGradient>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lineargradient: {
        flex: 1,
        alignItems: 'center',
    },
});
