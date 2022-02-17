import React from 'react';
import { View, Pressable, StyleSheet, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '../components/text/text'
import { colors } from '../theme/color'

export default function WelcomeScreen( { navigation } ) {
    return (
        <SafeAreaView style={{backgroundColor: '#193739' , flex: 1, }}>

        <Image  source={require('../../assets/wc.jpg')} style={{ alignSelf: 'center', width: Dimensions.get('screen').width, height: Dimensions.get('screen').height}} />

        {/* <View style={styles.viewStyle}>
            <Text preset="h9" style={styles.cStyle }>C</Text>
            <Text style={styles.programmingStyle}>PROGRAMMING</Text>
        </View> */}

        <Pressable onPress={ () => navigation.navigate("Home")}>
       {/* <Text style={styles.getStartedStyle}>Get Started</Text> */}
        </Pressable>
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
        paddingTop: 150,
        
    }
});