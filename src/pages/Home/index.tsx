import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BarMenu, Chart } from '../../assets';
import { Category, Content, Footbar, Gap, Search } from '../../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.lineargradient}>
            <View>
                <View style={styles.header}>
                    <BarMenu />
                    <View style={styles.title}>
                        <Text style={styles.uk}>UK</Text>
                        <Text style={styles.fd}>FundTrade</Text>
                    </View>
                        <Chart />
                    </View>
                <ScrollView style={styles.containerWrapper} showsVerticalScrollIndicator={false}>
                    <Gap height={30}/>
                    <Search />
                    <Gap height={40} />
                    <View>
                        <Text style={styles.Text}>Categories</Text>
                        <Gap height={10} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Category label='Drinks'/>
                            <Category label='Snacks'/>
                            <Category label='Burgers'/>
                            <Category label='Keripik'/>
                        </ScrollView>
                    </View>
                    <Gap height={26} />
                    <View>
                        <Text style={styles.Text}>Content</Text>
                        <Gap height={10} />
                        <View style={styles.contentWrapper}>
                            <Content />
                            <Content />
                            <Content />
                            <Content />
                            <Content />
                            <Content />
                            <Content />
                            <Content />
                            <Content />
                            <Content />
                        </View>
                    </View>
                </ScrollView>
                <Footbar type='home' navigation={navigation}/>
            </View>
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
        paddingTop: 30,
    },
    containerWrapper: {
        paddingHorizontal: 20,
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
        height: 50,
    },
    Text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: '#000000',
    },
    footer: {
        bottom: 0,
    },
    contentWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
});
