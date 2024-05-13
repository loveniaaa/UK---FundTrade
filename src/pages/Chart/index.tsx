import { StyleSheet, View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Footbar, Gap, HeaderPage } from '../../components';
import CheckBox from 'react-native-check-box'
import { list } from 'firebase/storage';
import { Poster } from '../../assets';

const ChartPage = ({ navigation, isChecked }) => {
    const [toggleCheckBoxList, setToggleCheckBoxList] = useState(
        Array.isArray(isChecked) ? isChecked.map(() => isChecked) : []
    );

    const handleCheckBoxClick = (index) => {
        const newToggleCheckBoxList = [...toggleCheckBoxList];
        if (index === 0) {
            const allChecked = newToggleCheckBoxList.every((isChecked) => isChecked);
            newToggleCheckBoxList.fill(!allChecked);
        } else {
            newToggleCheckBoxList[index] = !newToggleCheckBoxList[index];
        }
        setToggleCheckBoxList(newToggleCheckBoxList);
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#E5D5FF', '#481B6B']} style={styles.linearGradient}>
                <HeaderPage label='Chart' backButton={true} onPress={() => navigation.goBack()} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.containerWrapp}>
                        <View style={styles.listChartHead}>
                            <CheckBox
                                onClick={() => handleCheckBoxClick(0)}
                                isChecked={toggleCheckBoxList[0]}
                            />
                            <Text style={styles.labelTitle}>The Unklab Choir</Text>
                        </View>
                            <View style={styles.listChart}>
                                <CheckBox
                                    onClick={() => handleCheckBoxClick(1)} 
                                    isChecked={toggleCheckBoxList[1]}
                                />
                                <Image source={Poster} style={styles.poster} />
                                <View>
                                    <Text style={styles.labelContent}>Hot Dog</Text>
                                </View>
                            </View>
                            <View style={styles.listChart}>
                                <CheckBox
                                    onClick={() => handleCheckBoxClick(2)} 
                                    isChecked={toggleCheckBoxList[2]}
                                />
                                <Image source={Poster} style={styles.poster} />
                                <View>
                                    <Text style={styles.labelContent}>Hot Dog</Text>
                                </View>
                            </View>
                    </View>
                    <Gap height={25} />
                    <View style={styles.containerWrapp}>
                        <View style={styles.listChartHead}>
                            <CheckBox
                                onClick={() => handleCheckBoxClick(0)}
                                isChecked={toggleCheckBoxList[0]}
                            />
                            <Text style={styles.labelTitle}>The Unklab Choir</Text>
                        </View>
                            <View style={styles.listChart}>
                                <CheckBox
                                    onClick={() => handleCheckBoxClick(3)} 
                                    isChecked={toggleCheckBoxList[3]}
                                />
                                <Image source={Poster} style={styles.poster} />
                                <View>
                                    <Text style={styles.labelContent}>Hot Dog</Text>
                                </View>
                            </View>
                            <View style={styles.listChart}>
                                <CheckBox
                                    onClick={() => handleCheckBoxClick(4)} 
                                    isChecked={toggleCheckBoxList[4]}
                                />
                                <Image source={Poster} style={styles.poster} />
                                <View>
                                    <Text style={styles.labelContent}>Hot Dog</Text>
                                </View>
                            </View>
                    </View>
                </View>
            </LinearGradient>
            <Footbar type="checkout" label="Checkout" navigation={navigation}/>
        </View>
    )
}

export default ChartPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,

    },
    containerWrapp: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: 360,
        borderRadius: 10,
    },
    listChartHead: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
    },
    listChart: {
        padding: 10,
        marginLeft: 10,
        flexDirection: 'row',
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
        fontFamily: 'Montserrat-SemiBold'
    },
    labelContent: {
        color: '#020202',
        fontFamily: 'Montserrat-Medium'
    }
})
