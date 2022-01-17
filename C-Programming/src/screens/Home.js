
import React from 'react'
import { Pressable, View, FlatList, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { enableScreens } from 'react-native-screens'
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { colors } from '../theme/color'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';

export const C_TOPIC_LIST = [

    {
        name: 'What is C',
        color: '#DEF4FC',
        description: 'C programming is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. C is the most widely used computer language. It keeps fluctuating at number one scale of popularity along with Java programming language, which is also equally popular and most widely used among modern software programmers.',
        description2: ['Operating Systems', 'Language Compilers', 'Assemblers', 'Text Editors', 'Print Spoolers', 'Network Drivers', 'Modern Programs', 'Databases', 'Language Interpreters', 'Utilities'],
    },

    {
        name: 'Hello World',
        color: '#838391',
        description2: [],

    },

    {
        name: 'Data types',
        color: '#419EBB',
        description2: [],

    },

    {
        name: 'Input Output',
        color: '#EDA249',
        description2: [],

    },

    {
        name: 'Comments',
        color: '#6f2ed6',
        description2: [],

    },

    {
        name: 'Operators',
        color: '#D14C32',
        description2: [],

    },

    {
        name: 'Conditions',
        color: '#DEF4FC',
        description2: [],

    },

    {
        name: 'Nested If statements',
        color: '#CD5128',
        description2: [],

    },

    {
        name: 'Switch statements',
        color: '#1ec2a4',
        description2: [],

    },

    {
        name: 'Logical operators',
        color: '#2d68f0',
        description2: [],

    },

    {
        name: 'While loop',
        color: '#DEF4FC',
        description2: [],

    },

    {
        name: 'For loop',
        color: '#838391',
        description2: [],

    },

    {
        name: 'Function',
        color: '#419EBB',
        description2: [],

    },

    {
        name: 'Arrays',
        color: '#EDA249',
        description2: [],

    },

    {
        name: '2 Dimentional Arrays',
        color: '#6f2ed6',
        description2: [],

    },

    {
        name: 'Pointers',
        color: '#D14C32',
        description2: [],

    },

    {
        name: 'Function & Array',
        color: '#DEF4FC',
        description2: [],

    },

    {
        name: 'String',
        color: '#CD5128',
        description2: [],

    },

    {
        name: 'String function',
        color: '#1ec2a4',
        description2: [],

    },

    {
        name: 'Functions pointers',
        color: '#2d68f0',
        description2: [],

    },

    {
        name: 'Void pointers',
        color: '#DEF4FC',
        description2: [],

    },

    {
        name: 'Structures',
        color: '#838391',
        description2: [],

    },

    {
        name: 'Union',
        color: '#419EBB',
        description2: [],

    },

    {
        name: 'Dynamic string & array',
        color: '#EDA249',
        description2: [],

    },

    {
        name: 'Files',
        color: '#6f2ed6',
        description2: [],

    },

    {
        name: 'Binary files I/O',
        color: '#D14C32',
        description2: [],

    },

    {
        name: 'Error handling',
        color: '#DEF4FC',
        description2: [],

    },


];

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing[4],
        justifyContent: 'space-between'
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    rowCentered: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    planetName: {
        marginLeft: spacing[5],
        textTransform: 'uppercase'
    }
});

export default function Home({ navigation }) {
    const renderItem = ({ item, index }) => {
        const { name, color } = item
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { topic: item })} style={styles.item}>
                <View style={styles.rowCentered}>
                    <View style={[styles.circle, { backgroundColor: item.color }]} />
                    <Text style={styles.planetName} >{name}</Text>
                </View>
                <AntDesign name="right" size={16} color={colors.orange} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#556B2F', flex: 1 }} >
            <PlanetHeader backButton={false} topicName='TOPIC LIST' customStyles={{ color: colors.black }} />

            <FlatList
                data={C_TOPIC_LIST}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.name}
                contentContainerStyle={{ padding: spacing[5] }}
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: colors.green }} />}
            />

            <StatusBar barStyle="light-content" />
        </SafeAreaView>
    )
}
