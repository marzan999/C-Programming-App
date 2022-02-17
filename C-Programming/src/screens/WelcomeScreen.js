import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '../components/text/text'
import { colors } from '../theme/color'

export default function WelcomeScreen( { navigation } ) {
    return (
        <SafeAreaView style={{backgroundColor: '#193739' , flex: 1}}>

        <View style={styles.viewStyle}>
            <Text preset="h9" style={styles.cStyle }>C</Text>
            <Text style={styles.programmingStyle}>PROGRAMMING</Text>
        </View>

        <Pressable onPress={ () => navigation.navigate("Home")}>
        
        </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cStyle: {
        paddingTop: 140,
        paddingLeft: 100, 
        
    }, 

    programmingStyle: {
        paddingTop: 294, 
        fontSize: 30, 
        marginLeft: -80,
        fontWeight: 'bold',
    }, 

    viewStyle: {
        flexDirection: 'row',
    }
});