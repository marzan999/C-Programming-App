
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
        image: require("../../assets/1.png"),
        description: 'C programming is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. C is the most widely used computer language. It keeps fluctuating at number one scale of popularity along with Java programming language, which is also equally popular and most widely used among modern software programmers. \n\nIt is said that ‘C’ is a mother of programming language. One can say, C is a base for the programming. If you know ‘C’ you can easily grasp the knowledge of the other programming languages that uses the concept of ‘C’ \n\n\nSome examples of the use of C are -\n\nOperating Systems\n\nLanguage Compilers\n\nAssemblers\n\nText Editors\n\nPrint Spoolers\n\nNetwork Drivers\n\nModern Programs\n\nDatabases\n\nLanguage Interpreters\n\nUtilities',
        //description2: ['Operating Systems', 'Language Compilers', 'Assemblers', 'Text Editors', 'Print Spoolers', 'Network Drivers', 'Modern Programs', 'Databases', 'Language Interpreters', 'Utilities'],
        // code: [],
        // output: [],

    },

    {
        name: 'Hello World',
        color: '#838391',
        description: 'Program to Display "Hello, World!"',
        descriptionSC: '\nSource Code: \n',
        descriptionOP: 'Output: \n',
        code: '#include <stdio.h>\nint main() {\n// printf() displays the string inside quotation\nprintf("Hello, World!");\nreturn 0;\n}',
        output: 'Hello, World!',
        // description2: 'hello',
        outputDescription: '\n1. #include <stdio.h> – This statement tells compiler to include this stdio.h file in the program. This is a standard input output file that contains the definitions of common input output functions such as scanf() and printf(). In the above program we are using printf() function.\n\n2. int main() – Here main() is the function name and int is the return type of this function. Every C program must have this function because the execution of program begins with the main() function. The 0 return value of this function represents successful execution of program while the return value 1 represents the unsuccessful execution of program. This is the reason we have return 0; statement at the end of this main function.\n\n3. printf("Hello World"); – This function displays the content within double quotes as it is on the screen.\n\n4. return 0; – As mentioned above, the value 0 means successful execution of main() function.'
    },

    {
        name: 'Data types',
        color: '#419EBB',
        description: 'A data type specifies the type of data that a variable can store such as integer, floating, character, etc.',
        imageDT: require("../../assets/dt.png"),
        imageDT2: require("../../assets/dt2.png"),
        imageDT3: require("../../assets/dt3.png"),
        descriptionDT: 'There are the following data types in C language.',
        descriptionDT2: 'Basic Data Types',
        descriptionDT3: '\nThe basic data types are integer-based and floating-point based. C language supports both signed and unsigned literals. The memory size of the basic data types may change according to 32 or 64-bit operating system. Let us see the basic data types. Its size is given according to 32-bit architecture.\n'

    },

    {
        name: 'Input Output',
        color: '#EDA249',
        description1IO: 'C Input: ',
        descriptionIO: 'In C programming, scanf() is one of the commonly used function to take input from the user. The scanf() function reads formatted input from the standard input such as keyboards.',
        descriptionINT: 'Example: Integer Input/Output \n',
        descriptionCode: '#include <stdio.h>\nint main()\n{\nint testInteger;\nprintf("Enter an integer: ");\nscanf("%d", &testInteger);\nprintf("Number = %d",testInteger);\nreturn 0;\n}',
        descriptionOPT: 'Output: \n',
        descriptionOutput: 'Enter an integer: 4\nNumber = 4'

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
        width: 15,
        height: 15,
        borderRadius: 10,
    },
    rowCentered: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    topicName: {
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
                    <Text preset="h6" style={styles.topicName} >{name}</Text>
                </View>
                <AntDesign name="right" size={16} color={colors.black} />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#29595c', flex: 1 }} >
            <PlanetHeader backButton={false} topicName='TOPIC LIST' customStyles={{ color: '#40E0D0' }} />

            <FlatList
                data={C_TOPIC_LIST}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.name}
                contentContainerStyle={{ padding: spacing[5] }}
                ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: '#40E0D0' }} />}
            />

            <StatusBar barStyle="light-content" />
        </SafeAreaView>
    )
}
