import React from 'react';
import { View, Pressable, StyleSheet, Dimensions, Image, ImageBackground, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '../components/text/text'
import { colors } from '../theme/color'

export default function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ backgroundColor: '#193739', flex: 1, }}>

            <View style={styles.parent}>
                {/* <View style={styles.viewStyle}>
                    <Text preset="h9" style={styles.cStyle}>C</Text>
                    <Text style={styles.programmingStyle}>PROGRAMMING</Text>
                </View> */}
                {/* <Image  source={require('../../assets/wc.jpg')} style={{ alignSelf: 'center', width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}} /> */}

                
                <ImageBackground source={require('../../assets/wc.jpg')} style={{ alignSelf: 'center', width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, alignItems: 'center',justifyContent: 'center'}}>
                <Image />
                <Pressable style={styles.btn} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.getStartedStyle}>Get Started</Text>
                </Pressable>
                </ImageBackground>
            </View>
            <StatusBar barStyle="light-content"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // cStyle: {
    //     paddingTop: 140,
    //     paddingLeft: 100,
    //     // paddingLeft: Dimensions.get('screen').paddingLeft, 
    //     // width: Dimensions.get('screen').width - 100, 
    //     // height: Dimensions.get('screen').height

    // },
    parent: {
        alignItems: 'center',
    },

    // programmingStyle: {
    //     paddingTop: 294,
    //     fontSize: 30,
    //     marginLeft: -80,
    //     fontWeight: 'bold',
    //     // width: Dimensions.get('screen').width , 
    //     // height: Dimensions.get('screen').height

    // },

    viewStyle: {
        flexDirection: 'row',
    },

    getStartedStyle: {
        fontWeight: 'bold',
        fontSize: 35,
        padding: 15,
    },
    btn:{
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 40,
        marginTop: 400,
    }
});