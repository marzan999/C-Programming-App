
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
        descriptionSourceCodeHW: '\nSource Code: \n',
        descriptionOutputHW: 'Output: \n',
        codeHW: '#include <stdio.h>\nint main() {\n// printf() displays the string inside quotation\nprintf("Hello, World!");\nreturn 0;\n}',
        outputHW: 'Hello, World!',
        // description2: 'hello',
        outputDescriptionHW: '\n1. #include <stdio.h> – This statement tells compiler to include this stdio.h file in the program. This is a standard input output file that contains the definitions of common input output functions such as scanf() and printf(). In the above program we are using printf() function.\n\n2. int main() – Here main() is the function name and int is the return type of this function. Every C program must have this function because the execution of program begins with the main() function. The 0 return value of this function represents successful execution of program while the return value 1 represents the unsuccessful execution of program. This is the reason we have return 0; statement at the end of this main function.\n\n3. printf("Hello World"); – This function displays the content within double quotes as it is on the screen.\n\n4. return 0; – As mentioned above, the value 0 means successful execution of main() function.'
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
        descriptionOutput: 'Enter an integer: 4\nNumber = 4',
        descriptionIO2: 'Here, we have used %d format specifier inside the scanf() function to take int input from the user. When the user enters an integer, it is stored in the testInteger variable.',
        descriptionFLO: 'Example: Float and Double Input/Output \n',
        descriptionFLOCode: '#include <stdio.h>\nint main()\n{\nfloat num1;\ndouble num2;\n\nprintf("Enter a number: ");\nscanf("%f", &num1);\nprintf("Enter another number: ");\nscanf("%lf", &num2);\n\nprintf("num1 = %f", num1);\nprintf("num2 = %lf", num2);\n\nreturn 0;\n}',
        descriptionFLOOutput: 'Enter a number: 12.523\nEnter another number: 10.2\nnum1 = 12.523000\nnum2 = 10.200000',
        descriptionFLOdescription: 'We use %f and %lf format specifier for float and double respectively.',
        descriptionChe: 'Example: C Character I/O \n',
        descriptionCheCode: '#include <stdio.h>\nint main()\n{\nchar chr;\nprintf("Enter a character: ");\nscanf("%c",&chr);\nprintf("You entered %c.", chr);\nreturn 0;\n}   ',
        descriptionCheOutput: 'Enter a character: g\nYou entered g',
        descriptionChedescription: 'When a character is entered by the user in the above program, the character itself is not stored. Instead, an integer value (ASCII value) is stored. And when we display that value using %c text format, the entered character is displayed. If we use %d to display the character, it is ASCII value is printed.',
        description2FormetS1: 'Format Specifiers for I/O',
        description2FormetS2: 'As you can see from the above examples, we use\n\n%d for int\n%f for float\n%lf for double\n%c for char',
        description2FormetS3: 'Here is a list of commonly used C data types and their format specifiers.\n',
        imageIO: require("../../assets/IO.png"),

    },

    {
        name: 'Comments',
        color: '#6f2ed6',
        descriptionComments: 'This C tutorial explains how to use comments in the C language with syntax and examples.',
        descriptionCommentsDes: 'Description',
        descriptionCommentsDes2: 'In the C Programming Language, you can place comments in your source code that are not executed as part of the program.\n\nComments provide clarity to the C source code allowing others to better understand what the code was intended to accomplish and greatly helping in debugging the code. Comments are especially important in large projects containing hundreds or thousands of lines of source code or in projects in which many contributors are working on the source code.\n\nA comment starts with a slash asterisk /* and ends with a asterisk slash */ and can be anywhere in your program. Comments can span several lines within your C program. Comments are typically added directly above the related C source code.\n\nAdding source code comments to your C source code is a highly recommended practice. In general, it is always better to over comment C source code than to not add enough.',
        descriptionCommentsDes3: 'Syntax\n',
        descriptionCommentsDes4: 'The syntax for a comment is: \n',
        descriptionCommentsDes5: '/* comment goes here */\n\nOR\n\n/*\n* comment goes here\n*/',
    },

    {
        name: 'Operators',
        color: '#D14C32',
        imageOP: require("../../assets/op1.png"),
        imageOP3: require("../../assets/op3.png"),
        imageOP4: require("../../assets/op4.png"),
        descriptionOperator1: '\nAn operator is a symbol that operates on a value or a variable. For example: + is an operator to perform addition.\n\nC has a wide range of operators to perform various operations.',
        descriptionOperator2: '\nC Arithmetic Operators',
        descriptionOperator3: 'An arithmetic operator performs mathematical operations such as addition, subtraction, multiplication, division etc on numerical values (constants and variables).',
        descriptionOperator4: 'Example: Arithmetic Operators\n',
        descriptionOperator5: '// Working of arithmetic operators\n#include <stdio.h>\nint main()\n{\nint a = 9,b = 4, c;\n\nc = a+b;printf("a+b = %d ",c);\nc = a-b;\nprintf("a-b = %d ",c);\nc = a*b;\nprintf("a*b = %d ",c);\nc = a/b;\nprintf("a/b = %d ",c);\nc = a%b;\nprintf("Remainder when a divided by b = %d ",c);\n\nreturn 0;\n}',
        descriptionOperator6: 'Output\n',
        descriptionOperator7: 'a+b = 13\nrra-b = 5\na*b = 36\na/b = 2\nRemainder when a divided by b=1',
        descriptionOperator8: '\nThe operators +, - and * computes addition, subtraction, and multiplication respectively as you might have expected.\n\nIn normal calculation, 9/4 = 2.25. However, the output is 2 in the program.\n\nIt is because both the variables a and b are integers. Hence, the output is also an integer. The compiler neglects the term after the decimal point and shows answer 2 instead of 2.25.\n\nThe modulo operator % computes the remainder. When a=9 is divided by b=4, the remainder is 1. The % operator can only be used with integers.',
        descriptionOperator9: '\nC Increment and Decrement Operators',
        descriptionOperator10: 'C programming has two operators increment ++ and decrement -- to change the value of an operand (constant or variable) by 1.\nIncrement ++ increases the value by 1 whereas decrement -- decreases the value by 1. These two operators are unary operators, meaning they only operate on a single operand.',
        descriptionOperator11: 'Example: Increment and Decrement Operators\n',
        descriptionOperator12: '// Working of increment and decrement operators\n#include <stdio.h>\nint main()\n{\nint a = 10, b = 100;\nfloat c = 10.5, d = 100.5;\n\nprintf("++a = %d ", ++a);\nprintf("--b = %d ", --b);\nprintf("++c = %f ", ++c);\nprintf("--d = %f ", --d);\n\nreturn 0;\n}',
        descriptionOperator13: 'Output\n',
        descriptionOperator14: '++a = 11\n--b = 99\n++c = 11.500000\n--d = 99.500000',
        descriptionOperator15: '\nHere, the operators ++ and -- are used as prefixes. These two operators can also be used as postfixes like a++ and a--.',
        descriptionOperator16: '\nC Assignment Operators',
        descriptionOperator17: 'An assignment operator is used for assigning a value to a variable. The most common assignment operator is =',
        descriptionOperator18: 'Example: Assignment Operators\n',
        descriptionOperator19: '// Working of assignment operators\n#include <stdio.h>\nint main()\n{\nint a = 5, c;\n\nc = a;      // c is 5\nprintf("c = %d", c);\nc += a;     // c is 10\nprintf("c = %d", c);\nc -= a;     // c is 5\nprintf("c = %d", c);\nc *= a;     // c is 25\nprintf("c = %d", c);\nc /= a;     // c is 5\nprintf("c = %d", c);\nc %= a;     // c = 0\nprintf("c = %d\n", c);\n\nreturn 0;\n}',
        descriptionOperator20: 'Output\n',
        descriptionOperator21: 'c = 5 \nc = 10\n c = 5\n c = 25 \nc = 5 \nc = 0',
        descriptionOperator22: '\nC Relational Operators',
        descriptionOperator23: 'A relational operator checks the relationship between two operands. If the relation is true, it returns 1; if the relation is false, it returns value 0.\nRelational operators are used in decision making and loops.',
        descriptionOperator24: 'Example: Relational Operators\n',
        descriptionOperator25: '// Working of relational operators\n#include <stdio.h>\nint main()\n{\nint a = 5, b = 5, c = 10;\n\nprintf("%d == %d is %d ", a, b, a == b);\nprintf("%d == %d is %d ", a, c, a == c);\nprintf("%d > %d is %d ", a, b, a > b);\nprintf("%d > %d is %d ", a, c, a > c);\nprintf("%d < %d is %d ", a, b, a < b);\nprintf("%d < %d is %d ", a, c, a < c);\nprintf("%d != %d is %d ", a, b, a != b);\nprintf("%d != %d is %d ", a, c, a != c);\nprintf("%d >= %d is %d ", a, b, a >= b);\nprintf("%d >= %d is %d ", a, c, a >= c);\nprintf("%d <= %d is %d ", a, b, a <= b);\nprintf("%d <= %d is %d ", a, c, a <= c);\n\nreturn 0;\n}',
        descriptionOperator26: 'Output\n',
        descriptionOperator27: '5 == 5 is 1\n5 == 10 is 0\n5 > 5 is 0\n5 > 10 is 0\n5 < 5 is 0\n5 < 10 is 1\n5 != 5 is 0\n5 != 10 is 1\n5 >= 5 is 1\n5 >= 10 is 0\n5 <= 5 is 1\n5 <= 10 is 1 ',
        descriptionOperator28: '',
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
