import React from 'react';
import { View, Pressable, StyleSheet, Dimensions, Image, ImageBackground, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '../components/text/text'
import { colors } from '../theme/color'
import LottieView from 'lottie-react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: '#193739', flex: 1 }}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.viewStyle}>
                    <Text preset="h9" style={styles.cStyle}>C</Text>
                    <Text style={styles.programmingStyle}>PROGRAMMING</Text>
                </View>
                {/* <Image  source={require('../../assets/wc.jpg')} style={{ alignSelf: 'center', width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}} /> */}

                <LottieView style={styles.lottie} source={require('../../assets/pro.json')} autoPlay loop />
                {/* <ImageBackground source={require('../../assets/wc.jpg')} style={{ alignSelf: 'center', width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, alignItems: 'center'}}> */}
                <Pressable style={styles.btn} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.getStartedStyle}>Get Started</Text>
                </Pressable>
                {/* </ImageBackground> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cStyle: {
        paddingTop: 60,
        paddingLeft: 100,
        // paddingLeft: Dimensions.get('screen').paddingLeft, 
        // width: Dimensions.get('screen').width - 100, 
        // height: Dimensions.get('screen').height

    },

    programmingStyle: {
        paddingTop: 213,
        fontSize: 30,
        marginLeft: -80,
        fontWeight: 'bold',
        // width: Dimensions.get('screen').width , 
        // height: Dimensions.get('screen').height

    },

    viewStyle: {
        flexDirection: 'row',
    },

    getStartedStyle: {
        fontWeight: 'bold',
        fontSize: 35,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    btn:{
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 40,
        position: 'absolute',
        bottom: 130,
        alignSelf: 'center',
    },
    lottie: {
        height: 350, 
        width: 350,
        marginTop: -25,
        alignSelf: 'center',
    }
});