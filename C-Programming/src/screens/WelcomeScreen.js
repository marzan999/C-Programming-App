import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '../components/text/text'
import { colors } from '../theme/color'

export default function WelcomeScreen( { navigation } ) {
    return (
        <SafeAreaView style={{backgroundColor: '#193739' , flex: 1}}>

        <Pressable onPress={ () => navigation.navigate("Home")}>
        <View>
            <Text>C</Text>
            <Text>PROGRAMMING</Text>
        </View>
        </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cStyle: {
        alignItems: 'center', 
        justifyContent: 'center'
    }, 

    programmingStyle: {
        alignItems: 'center', 
        justifyContent: 'center'
    }
});