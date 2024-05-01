import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BarMenu, Chart } from '../../assets';
import { Category, Footbar, Gap, Search } from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}>
            <ScrollView>
                <View style={styles.header}>
                    <BarMenu />
                    <View style={styles.title}>
                        <Text style={styles.uk}>UK</Text>
                        <Text style={styles.fd}>FundTrade</Text>
                    </View>
                    <Chart />
                </View>
                <Gap height={30}/>
                <Search />
                <Gap height={40} />
                <View>
                    <Text style={styles.categoriesText}>Categories</Text>
                    <Gap height={10} />
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                    </ScrollView>
                </View>
            </ScrollView>
            <Footbar type='home'/>
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
        paddingHorizontal: 10,
        paddingTop: 30,
    },
    title: {
        flexDirection: 'row',
        marginHorizontal: 50,
    },
    uk: {
        marginRight: 5,
        color: '#000000',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
    fd: {
        color: '#5E2590',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    categoriesText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: '#000000',
    },
    footer: {
        bottom: 0,
    }
});
