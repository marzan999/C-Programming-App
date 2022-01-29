
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
        description: 'C programming is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. C is the most widely used computer language. It keeps fluctuating at number one scale of popularity along with Java programming language, which is also equally popular and most widely used among modern software programmers. \n\nIt is said that ‘C’ is a mother of programming language. One can say, C is a base for the programming. If you know ‘C’ you can easily grasp the knowledge of the other programming languages that uses the concept of ‘C’ ',
        descriptionWisC: '\n\nSome examples of the use of C are -',
        descriptionWisC2: '\nOperating Systems\n\nLanguage Compilers\n\nAssemblers\n\nText Editors\n\nPrint Spoolers\n\nNetwork Drivers\n\nModern Programs\n\nDatabases\n\nLanguage Interpreters\n\nUtilities',

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
        imageOP5: require("../../assets/op5.png"),
        imageOP6: require("../../assets/op6.png"),
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
        descriptionOperator28: '\nC Logical Operators',
        descriptionOperator29: 'An expression containing logical operator returns either 0 or 1 depending upon whether expression results true or false. Logical operators are commonly used in decision making in C programming.',
        descriptionOperator30: 'Example: Logical Operators \n',
        descriptionOperator31: '// Working of logical operators\n#include <stdio.h>\nint main()\n{\nint a = 5, b = 5, c = 10, result;\n\nresult = (a == b) && (c > b);\nprintf("(a == b) && (c > b) is %d ", result);\n\nresult = (a == b) && (c < b);\nprintf("(a == b) && (c < b) is %d ", result);\n\nresult = (a == b) || (c < b);\nprintf("(a == b) || (c < b) is %d ", result);\n\nresult = (a != b) || (c < b);\nprintf("(a != b) || (c < b) is %d ", result);\n\nresult = !(a != b);\nprintf("!(a != b) is %d ", result);\n\nresult = !(a == b);\nprintf("!(a == b) is %d ", result);\n\nreturn 0;\n}',
        descriptionOperator32: 'Output\n',
        descriptionOperator33: '(a == b) && (c > b) is 1 \n(a == b) && (c < b) is 0 \n(a == b) || (c < b) is 1 \n(a != b) || (c < b) is 0 \n!(a != b) is 1 \n!(a == b) is 0 ',
        descriptionOperator34: 'Explanation of logical operator program',
        descriptionOperator35: '(a == b) && (c > 5) evaluates to 1 because both operands (a == b) and (c > b) is 1 (true).\n\n(a == b) && (c < b) evaluates to 0 because operand (c < b) is 0 (false).\n\n(a == b) || (c < b) evaluates to 1 because (a = b) is 1 (true).\n\n(a != b) || (c < b) evaluates to 0 because both operand (a != b) and (c < b) are 0 (false).\n\n!(a != b) evaluates to 1 because operand (a != b) is 0 (false). Hence, !(a != b) is 1 (true).\n\n!(a == b) evaluates to 0 because (a == b) is 1 (true). Hence, !(a == b) is 0 (false).',
        descriptionOperator36: '\nC Bitwise Operators',
        descriptionOperator37: 'During computation, mathematical operations like: addition, subtraction, multiplication, division, etc are converted to bit-level which makes processing faster and saves power.\n\nBitwise operators are used in C programming to perform bit-level operations.',
    },

    {
        name: 'Conditions',
        color: '#DEF4FC',
        imageCON: require("../../assets/con1.png"),
        imageCON2: require("../../assets/con2.png"),
        descriptionConditions1: 'Conditional Statements in C programming are used to make decisions based on the conditions. Conditional statements execute sequentially when there is no condition around the statements. If you put some condition for a block of statements, the execution flow may change based on the result evaluated by the condition. This process is called decision making in ‘C.’\n\nIn ‘C’ programming conditional statements are possible with the help of the following two constructs:\n\n1. If statement\n\n2. If-else statement\n\nIt is also called as branching as a program decides which statement to execute based on the result of the evaluated condition.',
        descriptionConditions2: '\nC if Statement',
        descriptionConditions3: 'The syntax of the if statement in C programming is:\n',
        descriptionConditions4: 'if (test expression)\n{\n// code\n}',
        descriptionConditions5: 'How if statement works?',
        descriptionConditions6: 'The if statement evaluates the test expression inside the parenthesis ().\n\nIf the test expression is evaluated to true, statements inside the body of if are executed.\n\nIf the test expression is evaluated to false, statements inside the body of if are not executed.',
        descriptionConditions7: 'Example: if statement\n',
        descriptionConditions8: '// Program to display a number if it is negative\n\n#include <stdio.h>\nint main() {\nint number;\n\nprintf("Enter an integer: ");\nscanf("%d", &number);\n\n// true if number is less than 0\nif (number < 0) {\nprintf("You entered %d.\n", number);\n}\n\nprintf("The if statement is easy.");\n\nreturn 0;\n}',
        descriptionConditions9: 'Output \n',
        descriptionConditions10: 'Enter an integer: -2\nYou entered -2.\nThe if statement is easy.',
        descriptionConditions11: 'When the user enters -2, the test expression number<0 is evaluated to true. Hence, You entered -2 is displayed on the screen.',
        descriptionConditions12: '\nC if...else Statement',
        descriptionConditions13: 'The if statement may have an optional else block. The syntax of the if..else statement is:\n',
        descriptionConditions14: 'if (test expression) {\n// run code if test expression is true\n}\nelse {\n// run code if test expression is false\n}',
        descriptionConditions15: 'How if...else statement works?',
        descriptionConditions16: 'If the test expression is evaluated to true,\n\nstatements inside the body of if are executed.\nstatements inside the body of else are skipped from execution.\n\nIf the test expression is evaluated to false,\n\nstatements inside the body of else are executed\nstatements inside the body of if are skipped from execution.',
        descriptionConditions17: '\nExample: if...else statement\n',
        descriptionConditions18: '// Check whether an integer is odd or even\n\n#include <stdio.h>\nint main() {\nint number;\nprintf("Enter an integer: ");\nscanf("%d", &number);\n\n// True if the remainder is 0\nif  (number%2 == 0) {\nprintf("%d is an even integer.",number);\n}\nelse {\nprintf("%d is an odd integer.",number);\n}\n\nreturn 0;\n}',
        descriptionConditions19: 'Output\n',
        descriptionConditions20: 'Enter an integer: 7\n7 is an odd integer.',
        descriptionConditions21: 'When the user enters 7, the test expression number%2==0 is evaluated to false. Hence, the statement inside the body of else is executed.',

    },

    {
        name: 'Nested if..else statements',
        color: '#838391',
        descriptionNested1: 'This program given below relates two integers using either <, > and = similar to the if...else ladders example. However, we will use a nested if...else statement to solve this problem.\n',
        descriptionNested2: '#include <stdio.h>\nint main() {\nint number1, number2;\nprintf("Enter two integers: ");\nscanf("%d %d", &number1, &number2);\n\nif (number1 >= number2) {\nif (number1 == number2) {\nprintf("Result: %d = %d",number1,number2);\n}\nelse {\nprintf("Result: %d > %d", number1, number2);\n}\n}\nelse {\nprintf("Result: %d < %d",number1, number2);\n}\n\nreturn 0;\n}',
        descriptionNested3: 'If the body of an if...else statement has only one statement, you do not need to use brackets {}.',


    },

    {
        name: 'Break and continue',
        color: '#D14C32',
        imageBreak: require("../../assets/break.png"),
        imageContinue: require("../../assets/cont.png"),
        descriptionBreak1: 'C break',
        descriptionBreak2: 'The break statement ends the loop immediately when it is encountered. The break statement is almost always used with if...else statement inside the loop.',
        descriptionBreak3: 'How break statement works?',
        descriptionBreak4: 'Example: break statement\n',
        descriptionBreak5: '// Program to calculate the sum of numbers (10 numbers max)\n// If the user enters a negative number, the loop terminates\n#include <stdio.h>\n\nint main() {\n  int i;\n  double number, sum = 0.0;\n\n  for (i = 1; i <= 10; ++i) {\n      printf("Enter n%d: ", i);\n     scanf("%lf", &number);\n\n      // if the user enters a negative number, break the loop\n     if (number < 0.0) {\n         break;\n     }\n\n      sum += number; // sum = sum + number;\n   }\n\n   printf("Sum = %.2lf", sum);\n\n   return 0;\n}',
        descriptionBreak6: 'Output\n',
        descriptionBreak7: 'Enter n1: 2.4\nEnter n2: 4.5\nEnter n3: 3.4\nEnter n4: -3\nSum = 10.30',
        descriptionBreak8: 'This program calculates the sum of a maximum of 10 numbers. Why a maximum of 10 numbers? It is because if the user enters a negative number, the break statement is executed. This will end the for loop, and the sum is displayed.',
        descriptionBreak9: '\n\nC continue',
        descriptionBreak10: 'The continue statement skips the current iteration of the loop and continues with the next iteration. The continue statement is almost always used with the if...else statement.',
        descriptionBreak11: 'How continue statement works?',
        descriptionBreak12: 'Example: continue statement\n',
        descriptionBreak13: '// Program to calculate the sum of numbers (10 numbers max)\n// If the user enters a negative number, it is not added to the result\n\n#include <stdio.h>\nint main() {\n   int i;\n   double number, sum = 0.0;\n\n   for (i = 1; i <= 10; ++i) {\n      printf("Enter a n%d: ", i);\n      scanf("%lf", &number);\n\n     if (number < 0.0) {\n\n         continue;\n\n      }\n\n   sum += number;\n   }\n\n   printf("Sum = %.2lf", sum);\n\n   return 0;\n}',
        descriptionBreak14: 'Output\n',
        descriptionBreak15: 'Enter n1: 1.1\nEnter n2: 2.2\nEnter n3: 5.5\nEnter n4: 4.4\nEnter n5: -3.4\nEnter n6: -45.5\nEnter n7: 34.5\nEnter n8: -4.2\nEnter n9: -1000\nEnter n10: 12\nSum = 59.70',
        descriptionBreak16: 'In this program, when the user enters a positive number, the sum is calculated using sum += number; statement.\n\nWhen the user enters a negative number, the continue statement is executed and it skips the negative number from the calculation.',

    },

    {
        name: 'Switch statements',
        color: '#1ec2a4',
        imageSW1: require("../../assets/sw1.png"),
        descriptionSwitchStatement1: 'C switch Statement',
        descriptionSwitchStatement2: 'The switch statement allows us to execute one code block among many alternatives.\n\nYou can do the same thing with the if...else..if ladder. However, the syntax of the switch statement is much easier to read and write.',
        descriptionSwitchStatement3: 'Syntax of switch...case\n',
        descriptionSwitchStatement4: 'switch (expression)\n{\ncase constant1:\n// statements\nbreak;\n\ncase constant2:\n// statements\nbreak;\n.\n.\n.\ndefault:\n// default statements\n}',
        descriptionSwitchStatement5: 'How does the switch statement work?\n',
        descriptionSwitchStatement6: 'The expression is evaluated once and compared with the values of each case label.\n\nIf there is a match, the corresponding statements after the matching label are executed. For example, if the value of the expression is equal to constant2, statements after case constant2: are executed until break is encountered.\n\nIf there is no match, the default statements are executed.',
        descriptionSwitchStatement7: 'switch Statement Flowchart\n',
        descriptionSwitchStatement8: 'Example: Simple Calculator\n',
        descriptionSwitchStatement9: '// Program to create a simple calculator\n#include <stdio.h>\n\nint main() {\nchar operation;\ndouble n1, n2;\n\nprintf("Enter an operator (+, -, *, /): ");\nscanf("%c", &operation);\nprintf("Enter two operands: ");\nscanf("%lf %lf",&n1, &n2);\n\nswitch(operation)\n{\ncase  + :\nprintf("%.1lf + %.1lf = %.1lf",n1, n2, n1+n2);\n\nbreak;\n\ncase  - :\nprintf("%.1lf - %.1lf = %.1lf",n1, n2, n1-n2);\n\nbreak;\n\ncase  * :\nprintf("%.1lf * %.1lf = %.1lf",n1, n2, n1*n2);\n\nbreak;\n\ncase  / :\n\nprintf("%.1lf / %.1lf = %.1lf",n1, n2, n1/n2);\n\nbreak;\n\n// operator does not match any case constant +, -, *, /\ndefault:\nprintf("Error! operator is not correct");\n}\n\nreturn 0;\n}',
        descriptionSwitchStatement10: 'Output\n',
        descriptionSwitchStatement11: 'Enter an operator (+, -, *, /): -\nEnter two operands: 32.5\n12.4\n32.5 - 12.4 = 20.1',
        descriptionSwitchStatement12: 'The - operator entered by the user is stored in the operation variable. And, two operands 32.5 and 12.4 are stored in variables n1 and n2 respectively.\n\nSince the operation is -, the control of the program jumps to',
        descriptionSwitchStatement13: 'printf("%.1lf - %.1lf = %.1lf", n1, n2, n1-n2);',
        descriptionSwitchStatement14: 'Finally, the break statement terminates the switch statement.',

    },

    {
        name: 'loop',
        color: '#DEF4FC',
        imageWhile: require("../../assets/while.png"),
        imageFor: require("../../assets/for.png"),
        imageDoW: require("../../assets/doW.png"),
        descriptionloop1: 'In programming, loops are used to repeat a block of code until a specified condition is met.\n\nC programming has three types of loops.\n\n 1. for loop\n2. while loop\n3. do...while loop',
        descriptionloop2: '\n\nwhile loop',
        descriptionloop3: 'The syntax of the while loop is:\n',
        descriptionloop4: 'while (testExpression) {\n// the body of the loop \n}',
        descriptionloop5: 'How while loop works?',
        descriptionloop6: ' - The while loop evaluates the testExpression inside the parentheses ().\n - If testExpression is true, statements inside the body of while loop are executed. Then, testExpression is evaluated again.\n - The process goes on until testExpression is evaluated to false.\n - If testExpression is false, the loop terminates (ends).',
        descriptionloop7: 'Flowchart of while loop\n',
        descriptionloop8: 'Example: while loop\n',
        descriptionloop9: '// Print numbers from 1 to 5\n\n#include <stdio.h>\nint main() {\nint i = 1;\n\nwhile (i <= 5) {\nprintf("%d\n", i);\n++i;\n}\n\nreturn 0;\n}',
        descriptionloop10: 'Output\n',
        descriptionloop11: '1\n2\n3\n4\n5',
        descriptionloop12: 'Here, we have initialized i to 1.\n\n1. When i = 1, the test expression i <= 5 is true. Hence, the body of the while loop is executed. This prints 1 on the screen and the value of i is increased to 2.\n2. Now, i = 2, the test expression i <= 5 is again true. The body of the while loop is executed again. This prints 2 on the screen and the value of i is increased to 3.\n3. This process goes on until i becomes 6. Then, the test expression i <= 5 will be false and the loop terminates.',
        descriptionloop13: '\nfor Loop',
        descriptionloop14: 'The syntax of the for loop is:\n',
        descriptionloop15: 'for (initializationStatement; testExpression; updateStatement)\n{\n    // statements inside the body of loop\n}',
        descriptionloop16: 'How for loop works?',
        descriptionloop17: ' - The initialization statement is executed only once.\n - Then, the test expression is evaluated. If the test expression is evaluated to false, the for loop is terminated.\n - However, if the test expression is evaluated to true, statements inside the body of the for loop are executed, and the update expression is updated.\n - Again the test expression is evaluated.\n\nThis process goes on until the test expression is false. When the test expression is false, the loop terminates.',
        descriptionloop18: 'for loop Flowchart\n',
        descriptionloop19: 'Example: for loop\n',
        descriptionloop20: '// Print numbers from 1 to 10\n#include <stdio.h>\n\nint main() {\nint i;\n\nfor (i = 1; i < 11; ++i)\n{\nprintf("%d ", i);\n}\nreturn 0;\n}',
        descriptionloop21: 'Output\n',
        descriptionloop22: '1 2 3 4 5 6 7 8 9 10',
        descriptionloop23: '1. i is initialized to 1.\n\n2. The test expression i < 11 is evaluated. Since 1 less than 11 is true, the body of for loop is executed. This will print the 1 (value of i) on the screen.\n\n3. The update statement ++i is executed. Now, the value of i will be 2. Again, the test expression is evaluated to true, and the body of for loop is executed. This will print 2 (value of i) on the screen.\n\n4. Again, the update statement ++i is executed and the test expression i < 11 is evaluated. This process goes on until i becomes 11.\n\n5. When i becomes 11, i < 11 will be false, and the for loop terminates.',

        descriptionloop24: '\n\ndo...while loop',
        descriptionloop25: 'The do..while loop is similar to the while loop with one important difference. The body of do...while loop is executed at least once. Only then, the test expression is evaluated.\n\nThe syntax of the do...while loop is:\n',
        descriptionloop26: 'do {\n    // the body of the loop\n}\nwhile (testExpression);',
        descriptionloop27: 'How do...while loop works?',
        descriptionloop28: ' - The body of do...while loop is executed once. Only then, the testExpression is evaluated.\n - If testExpression is true, the body of the loop is executed again and testExpression is evaluated once more.\n - This process goes on until testExpression becomes false.\n - If testExpression is false, the loop ends.',
        descriptionloop29: 'Flowchart of do...while Loop\n',
        descriptionloop30: 'Example: do...while loop\n',
        descriptionloop31: '// Program to add numbers until the user enters zero\n\n#include <stdio.h>\nint main() {\n\n  double number, sum = 0;\n\n // the body of the loop is executed at least once\n  do {\n  printf("Enter a number: ");\n  scanf("%lf", &number);\n  sum += number;\n  }\n  while(number != 0.0);\n\n  printf("Sum = %.2lf",sum);\n\n  return 0;\n}',
        descriptionloop32: 'Output\n',
        descriptionloop33: 'Enter a number: 1.5\nEnter a number: 2.4\nEnter a number: -3.4\nEnter a number: 4.2\nEnter a number: 0\nSum = 4.70',
        descriptionloop34: 'Here, we have used a do...while loop to prompt the user to enter a number. The loop works as long as the input number is not 0.\n\nThe do...while loop executes at least once i.e. the first iteration runs without checking the condition. The condition is checked only after the first iteration has been executed.\n',
        descriptionloop35: 'do {\n    printf("Enter a number: ");\n    scanf("%lf", &number);\n    sum += number;\n  }\n  while(number != 0.0);',
        descriptionloop36: 'So, if the first input is a non-zero number, that number is added to the sum variable and the loop continues to the next iteration. This process is repeated until the user enters 0.\n\nBut if the first input is 0, there will be no second iteration of the loop and sum becomes 0.0.\n\nOutside the loop, we print the value of sum.',
    },

    {
        name: 'Function',
        color: '#419EBB',
        imageFunction: require("../../assets/func.png"),
        descriptionFunction1: 'A function is a block of code that performs a specific task.\n\nSuppose, you need to create a program to create a circle and color it. You can create two functions to solve this problem:\n\n - create a circle function\n - create a color function\n\nDividing a complex problem into smaller chunks makes our program easy to understand and reuse.',
        descriptionFunction2: 'Types of function',
        descriptionFunction3: 'There are two types of function in C programming:\n\n - Standard library functions\n - User-defined functions',
        descriptionFunction4: '\n\nStandard library functions',
        descriptionFunction5: 'The standard library functions are built-in functions in C programming.\n\nThese functions are defined in header files. For example,\n\n - The printf() is a standard library function to send formatted output to the screen (display output on the screen). This function is defined in the stdio.h header file. Hence, to use the printf()function, we need to include the stdio.h header file using #include <stdio.h>.\n\n - The sqrt() function calculates the square root of a number. The function is defined in the math.h header file.  ',
        descriptionFunction6: '\n\nUser-defined function',
        descriptionFunction7: 'You can also create functions as per your need. Such functions created by the user are known as user-defined functions.',
        descriptionFunction8: 'How user-defined function works?\n',
        descriptionFunction9: '#include <stdio.h>\nvoid functionName()\n{\n    ... .. ...\n    ... .. ...\n}\n\nint main()\n{\n    ... .. ...\n    ... .. ...\n\n    functionName();\n\n    ... .. ...\n    ... .. ...\n}',
        descriptionFunction10: 'The execution of a C program begins from the main() function.\n\nWhen the compiler encounters functionName();, control of the program jumps to\n',
        descriptionFunction11: 'void functionName()',
        descriptionFunction12: 'And, the compiler starts executing the codes inside functionName().\n\nThe control of the program jumps back to the main() function once code inside the function definition is executed.',
        descriptionFunction13: 'How function works in C programming?\n',
        descriptionFunction14: 'Note, function names are identifiers and should be unique.',

    },

    {
        name: 'Arrays',
        color: '#EDA249',
        imageArray1: require("../../assets/array1.png"),
        imageArray2: require("../../assets/array2.png"),
        imageArray3: require("../../assets/array3.png"),
        descriptionArray0: 'An array is a variable that can store multiple values. For example, if you want to store 100 integers, you can create an array for it.\n',
        descriptionArray2: 'int data[100];',
        descriptionArray3: 'How to declare an array?\n',
        descriptionArray4: 'dataType arrayName[arraySize];',
        descriptionArray5: 'For example,\n',
        descriptionArray6: 'float mark[5];',
        descriptionArray7: 'Here, we declared an array, mark, of floating-point type. And its size is 5. Meaning, it can hold 5 floating-point values.\n\nIt is important to note that the size and type of an array cannot be changed once it is declared.',
        descriptionArray8: 'Access Array Elements',
        descriptionArray9: 'You can access elements of an array by indices.\n\nSuppose you declared an array mark as above. The first element is mark[0], the second element is mark[1] and so on',
        descriptionArray10: 'Few keynotes:',
        descriptionArray11: 'Arrays have 0 as the first index, not 1. In this example, mark[0] is the first element.\n\n - If the size of an array is n, to access the last element, the n-1 index is used. In this example, mark[4]\n\n - Suppose the starting address of mark[0] is 2120d. Then, the address of the mark[1] will be 2124d. Similarly, the address of mark[2] will be 2128d and so on.\n\n - This is because the size of a float is 4 bytes.',
        descriptionArray12: 'How to initialize an array?',
        descriptionArray13: 'It is possible to initialize an array during declaration. For example,\n',
        descriptionArray14: 'int mark[5] = {19, 10, 8, 17, 9};',
        descriptionArray15: 'You can also initialize an array like this.\n',
        descriptionArray16: 'int mark[] = {19, 10, 8, 17, 9};',
        descriptionArray17: 'Here, we have not specified the size. However, the compiler knows its size is 5 as we are initializing it with 5 elements.',
        descriptionArray18: 'Here,\n',
        descriptionArray19: 'mark[0] is equal to 19\nmark[1] is equal to 10\nmark[2] is equal to 8\nmark[3] is equal to 17\nmark[4] is equal to 9',
        descriptionArray20: 'Change Value of Array elements\n',
        descriptionArray21: 'int mark[5] = {19, 10, 8, 17, 9}\n\n// make the value of the third element to -1\nmark[2] = -1;\n\n// make the value of the fifth element to 0\nmark[4] = 0;',
        descriptionArray22: 'Input and Output Array Elements',
        descriptionArray23: 'Here is how you can take input from the user and store it in an array element.\n',
        descriptionArray24: '// take input and store it in the 3rd element\nscanf("%d", &mark[2]);\n\n// take input and store it in the ith element\nscanf("%d", &mark[i-1]);',
        descriptionArray25: 'Here is how you can print an individual element of an array.\n',
        descriptionArray26: '// print the first element of the array\nprintf("%d", mark[0]);\n\n// print the third element of the array\nprintf("%d", mark[2]);\n\n// print ith element of the array\nprintf("%d", mark[i-1]);',
        descriptionArray27: 'Example: Array Input/Output\n',
        descriptionArray28: '// Program to take 5 values from the user and store them in an array\n// Print the elements stored in the array\n#include <stdio.h>\n\nint main() {\n  int values[5];\n\n printf("Enter 5 integers: ");\n\n // taking input and storing it in an array\n for(int i = 0; i < 5; ++i) {\n    scanf("%d", &values[i]);\n }\n\n  printf("Displaying integers: ");\n\n // printing elements of an array\n for(int i = 0; i < 5; ++i) {\n   printf("%d\n", values[i]);\n  }\n  return 0;\n}',
        descriptionArray29: 'Output\n',
        descriptionArray30: 'Enter 5 integers: 1\n-3\n34\n0\n3\nDisplaying integers: 1\n-3\n34\n0\n3',
        descriptionArray31: 'Here, we have used a for loop to take 5 inputs from the user and store them in an array. Then, using another for loop, these elements are displayed on the screen.',
        descriptionArray1: '',
        descriptionArray1: '',
        descriptionArray1: '',
        descriptionArray1: '',

    },

    {
        name: 'Multidimensional Arrays',
        color: '#6f2ed6',
        imageMultiD: require("../../assets/2da1.png"),
        descriptionMultiD1: 'In C programming, you can create an array of arrays. These arrays are known as multidimensional arrays. For example,\n',
        descriptionMultiD2: 'float x[3][4];',
        descriptionMultiD3: 'Here, x is a two-dimensional (2d) array. The array can hold 12 elements. You can think the array as a table with 3 rows and each row has 4 columns.',
        descriptionMultiD4: 'Similarly, you can declare a three-dimensional (3d) array. For example,\n',
        descriptionMultiD5: 'float y[2][4][3];',
        descriptionMultiD6: 'Here, the array y can hold 24 elements.',
        descriptionMultiD7: 'Initializing a multidimensional array',
        descriptionMultiD8: 'Here is how you can initialize two-dimensional and three-dimensional arrays:',
        descriptionMultiD9: 'Initialization of a 2d array\n',
        descriptionMultiD10: '// Different ways to initialize two-dimensional array\n\nint c[2][3] = {{1, 3, 0}, {-1, 5, 9}};\n\nint c[][3] = {{1, 3, 0}, {-1, 5, 9}};\n\nint c[2][3] = {1, 3, 0, -1, 5, 9};',
        descriptionMultiD11: 'Initialization of a 3d array\n',
        descriptionMultiD12: 'You can initialize a three-dimensional array in a similar way like a two-dimensional array. Here is an example,\n',
        descriptionMultiD13: 'int test[2][3][4] = {\n    {{3, 4, 2, 3}, {0, -3, 9, 11}, {23, 12, 23, 2}},\n    {{13, 4, 56, 3}, {5, 9, 3, 5}, {3, 1, 4, 9}}};',
        descriptionMultiD14: 'Example: Two-dimensional array to store and print values\n',
        descriptionMultiD15: '// C program to store temperature of two cities of a week and display it.\n#include <stdio.h>\nconst int CITY = 2;\nconst int WEEK = 7;\nint main()\n{\n  int temperature[CITY][WEEK];\n\n // Using nested loop to store values in a 2d array\n for (int i = 0; i < CITY; ++i)\n {\n   for (int j = 0; j < WEEK; ++j)\n    {\n     printf("City %d, Day %d: ", i + 1, j + 1);\n     scanf("%d", &temperature[i][j]);\n    }\n  }\n  printf("Displaying values: ");\n\n // Using nested loop to display vlues of a 2d array\n  for (int i = 0; i < CITY; ++i)\n  {\n   for (int j = 0; j < WEEK; ++j)\n   {\n     printf("City %d, Day %d = %d", i + 1, j + 1, temperature[i][j]);\n   }\n  }\n  return 0;\n}',
        descriptionMultiD16: 'Output\n',
        descriptionMultiD17: 'City 1, Day 1: 33\nCity 1, Day 2: 34\nCity 1, Day 3: 35\nCity 1, Day 4: 33\nCity 1, Day 5: 32\nCity 1, Day 6: 31\nCity 1, Day 7: 30\nCity 2, Day 1: 23\nCity 2, Day 2: 22\nCity 2, Day 3: 21\nCity 2, Day 4: 24\nCity 2, Day 5: 22\nCity 2, Day 6: 25\nCity 2, Day 7: 26\n\nDisplaying values: \n\nCity 1, Day 1 = 33\nCity 1, Day 2 = 34\nCity 1, Day 3 = 35\nCity 1, Day 4 = 33\nCity 1, Day 5 = 32\nCity 1, Day 6 = 31\nCity 1, Day 7 = 30\nCity 2, Day 1 = 23\nCity 2, Day 2 = 22\nCity 2, Day 3 = 21\nCity 2, Day 4 = 24\nCity 2, Day 5 = 22\nCity 2, Day 6 = 25\nCity 2, Day 7 = 26',
        descriptionMultiD18: 'Example: Three-dimensional array\n',
        descriptionMultiD19: '// C Program to store and print 12 values entered by the user\n\n#include <stdio.h>\nint main()\n{\n  int test[2][3][2];\n\n  printf("Enter 12 values: ");\n\n  for (int i = 0; i < 2; ++i)\n  {\n    for (int j = 0; j < 3; ++j)\n    {\n      for (int k = 0; k < 2; ++k)\n     {\n        scanf("%d", &test[i][j][k]);\n      }\n    }\n  }\n\n  // Printing values with proper index.\n\n  printf("\nDisplaying values: ");\n  for (int i = 0; i < 2; ++i)\n  {\n    for (int j = 0; j < 3; ++j)\n    {\n     for (int k = 0; k < 2; ++k)\n      {\n       printf("test[%d][%d][%d] = %d", i, j, k, test[i][j][k]);\n     }\n    }\n  }\n\n  return 0;\n}',
        descriptionMultiD20: 'Output\n',
        descriptionMultiD21: 'Enter 12 values: \n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n\nDisplaying Values:\ntest[0][0][0] = 1\ntest[0][0][1] = 2\ntest[0][1][0] = 3\ntest[0][1][1] = 4\ntest[0][2][0] = 5\ntest[0][2][1] = 6\ntest[1][0][0] = 7\ntest[1][0][1] = 8\nbtest[1][1][0] = 9\ntest[1][1][1] = 10\ntest[1][2][0] = 11\ntest[1][2][1] = 12',

    },

    {
        name: 'Function & Array',
        color: '#D14C32',
        descriptionFA1: 'Pass arrays to a function in C',
        descriptionFA2: 'In C programming, you can pass an entire array to functions. Before we learn that, let us see how you can pass individual elements of an array to functions.',
        descriptionFA3: 'Pass Individual Array Elements',
        descriptionFA4: 'Passing array elements to a function is similar to passing variables to a function.',
        descriptionFA5: 'Example: Pass Individual Array Elements\n',
        descriptionFA6: '#include <stdio.h>\nvoid display(int age1, int age2) {\n  printf("%d", age1);\n  printf("%d", age2);\n}\n\nint main() {\n  int ageArray[] = {2, 8, 4, 12};\n\n  // pass second and third elements to display()\n  display(ageArray[1], ageArray[2]); \n  return 0;\n}',
        descriptionFA7: 'Output\n',
        descriptionFA8: '8\n4',
        descriptionFA9: 'Here, we have passed array parameters to the display() function in the same way we pass variables to a function.\n',
        descriptionFA9a: '// pass second and third elements to display()\ndisplay(ageArray[1], ageArray[2]);',
        descriptionFA10: 'We can see this in the function definition, where the function parameters are individual variables:\n',
        descriptionFA11: 'void display(int age1, int age2) {\n    // code\n}',
        descriptionFA12: 'Example: Pass Arrays to Functions\n',
        descriptionFA13: '// Program to calculate the sum of array elements by passing to a function \n\n#include <stdio.h>\nfloat calculateSum(float num[]);\n\nint main() {\n  float result, num[] = {23.4, 55, 22.6, 3, 40.5, 18};\n\n // num array is passed to calculateSum()\n  result = calculateSum(num); \n  printf("Result = %.2f", result);\n  return 0;\n}\n\nfloat calculateSum(float num[]) {\n  float sum = 0.0;\n\n  for (int i = 0; i < 6; ++i) {\n    sum += num[i];\n  }\n\n  return sum;\n}',
        descriptionFA14: 'Output\n',
        descriptionFA15: 'Result = 162.50',
        descriptionFA16: 'To pass an entire array to a function, only the name of the array is passed as an argument.\n',
        descriptionFA17: 'result = calculateSum(num);',
        descriptionFA18: 'However, notice the use of [] in the function definition.\n',
        descriptionFA19: 'float calculateSum(float num[]) {\n    ... ..\n}',
        descriptionFA20: 'This informs the compiler that you are passing a one-dimensional array to the function.',
        descriptionFA21: 'Pass Multidimensional Arrays to a Function',
        descriptionFA22: 'To pass multidimensional arrays to a function, only the name of the array is passed to the function (similar to one-dimensional arrays).',
        descriptionFA23: 'Example: Pass two-dimensional arrays\n',
        descriptionFA24: '#include <stdio.h>\nvoid displayNumbers(int num[2][2]);\n\nint main() {\n  int num[2][2];\n  printf("Enter 4 numbers:");\n  for (int i = 0; i < 2; ++i) {\n    for (int j = 0; j < 2; ++j) {\n      scanf("%d", &num[i][j]);\n    }\n  }\n\n  // pass multi-dimensional array to a function\n  displayNumbers(num);\n\n  return 0;\n}\n\nvoid displayNumbers(int num[2][2]) {\n  printf("Displaying:");\n  for (int i = 0; i < 2; ++i) {\n    for (int j = 0; j < 2; ++j) {\n      printf("%d", num[i][j]);\n    }\n  }\n}',
        descriptionFA25: 'Output\n',
        descriptionFA26: 'Enter 4 numbers:\n2\n3\n4\n5\nDisplaying:\n2\n3\n4\n5',
        descriptionFA27: 'Notice the parameter int num[2][2] in the function prototype and function definition:\n',
        descriptionFA28: '// function prototype\nvoid displayNumbers(int num[2][2]);',
        descriptionFA29: 'This signifies that the function takes a two-dimensional array as an argument. We can also pass arrays with more than 2 dimensions as a function argument.\n\nWhen passing two-dimensional arrays, it is not mandatory to specify the number of rows in the array. However, the number of columns should always be specified.\n\nFor example,\n',
        descriptionFA30: 'void displayNumbers(int num[][2]) {\n    // code\n}',


    },

    {
        name: 'Pointers',
        color: '#DEF4FC',
        descriptionPointers1: 'Pointers are powerful features of C and C++ programming. Before we learn pointers, let us learn about addresses in C programming.',
        descriptionPointers2: 'Address in C',
        descriptionPointers3: 'If you have a variable var in your program, &var will give you its address in the memory.\n\nWe have used address numerous times while using the scanf() function.\n',
        descriptionPointers4: 'scanf("%d", &var);',
        descriptionPointers5: 'Here, the value entered by the user is stored in the address of var variable. Let us take a working example.\n',
        descriptionPointers6: '#include <stdio.h>\nint main()\n{\n  int var = 5;\n  printf("var: %d\n", var);\n\n  // Notice the use of & before var\n  printf("address of var: %p", &var);  \n  return 0;\n}',
        descriptionPointers7: 'Output\n',
        descriptionPointers8: 'var: 5 \naddress of var: 2686778',
        descriptionPointers9: 'C Pointers',
        descriptionPointers10: 'Pointers (pointer variables) are special variables that are used to store addresses rather than values.',
        descriptionPointers11: 'Pointer Syntax',
        descriptionPointers12: 'Here is how we can declare pointers.\n',
        descriptionPointers13: 'int* p;',
        descriptionPointers14: 'Here, we have declared a pointer p of int type.\n\nYou can also declare pointers in these ways.\n',
        descriptionPointers15: 'int *p1;\nint * p2;',
        descriptionPointers16: 'Let us take another example of declaring pointers.\n',
        descriptionPointers17: 'int* p1, p2;',
        descriptionPointers18: 'Here, we have declared a pointer p1 and a normal variable p2.',
        descriptionPointers19: 'Assigning addresses to Pointers',
        descriptionPointers20: 'Let us take an example.\n',
        descriptionPointers21: 'int* pc, c;\nc = 5;\npc = &c;',
        descriptionPointers22: 'Here, 5 is assigned to the c variable. And, the address of c is assigned to the pc pointer.',
        descriptionPointers23: 'Get Value of Thing Pointed by Pointers',
        descriptionPointers24: 'To get the value of the thing pointed by the pointers, we use the * operator. \nFor example:\n',
        descriptionPointers25: 'int* pc, c;\nc = 5;\npc = &c;\nprintf("%d", *pc);   // Output: 5',
        descriptionPointers26: 'Here, the address of c is assigned to the pc pointer. To get the value stored in that address, we used *pc.',
        descriptionPointers27: 'Changing Value Pointed by Pointers\n',
        descriptionPointers28: 'int* pc, c;\nc = 5;\npc = &c;\nc = 1;\nprintf("%d", c);    // Output: 1\nprintf("%d", *pc);  // Ouptut: 1',
        descriptionPointers29: 'We have assigned the address of c to the pc pointer.\n\nThen, we changed the value of c to 1. Since pc and the address of c is the same, *pc gives us 1.\n\nLet us take another example.\n',
        descriptionPointers30: 'int* pc, c;\nc = 5;\npc = &c;\n*pc = 1;\nprintf("%d", *pc);  // Ouptut: 1\nprintf("%d", c);    // Output: 1',
        descriptionPointers31: 'We have assigned the address of c to the pc pointer.\n\nThen, we changed *pc to 1 using *pc = 1;. Since pc and the address of c is the same, c will be equal to 1.\n\nLet us take one more example.\n',
        descriptionPointers32: 'int* pc, c, d;\nc = 5;\nd = -15;\n\npc = &c; printf("%d", *pc); // Output: 5\npc = &d; printf("%d", *pc); // Ouptut: -15',
        descriptionPointers33: 'Initially, the address of c is assigned to the pc pointer using pc = &c;. Since c is 5, *pc gives us 5.\n\nThen, the address of d is assigned to the pc pointer using pc = &d;. Since d is -15, *pc gives us -15.',
        descriptionPointers34: 'Example: Working of Pointers\n',
        descriptionPointers35: '#include <stdio.h>\nint main()\n{\n  int* pc, c;\n\n   c = 22;\n   printf("Address of c: %p", &c);\n   printf("Value of c: %d", c);  // 22\n\n   pc = &c;\n   printf("Address of pointer pc: %p", pc);\n   printf("Content of pointer pc: %d", *pc); // 22\n\n   c = 11;\n   printf("Address of pointer pc: %p", pc);\n   printf("Content of pointer pc: %d", *pc); // 11\n\n  *pc = 2;\n   printf("Address of c: %p", &c);\n   printf("Value of c: %d", c); // 2\n   return 0;\n}',
        descriptionPointers36: 'Output\n',
        descriptionPointers37: 'Address of c: 2686784\nValue of c: 22\n\nAddress of pointer pc: 2686784\nContent of pointer pc: 22\n\nAddress of pointer pc: 2686784\nContent of pointer pc: 11\n\nAddress of c: 2686784\nValue of c: 2',

    },

    {
        name: 'String',
        color: '#CD5128',
        descriptionString1: "In C programming, a string is a sequence of characters terminated with a null character. \n\nFor example:\n",
        descriptionString2: 'char c[] = "c string";',
        descriptionString3: 'When the compiler encounters a sequence of characters enclosed in the double quotation marks, it appends a null character \0 at the end by default.',
        descriptionString4: 'How to declare a string?',
        descriptionString5: 'Here is how you can declare strings:\n',
        descriptionString6: 'char s[5];',
        descriptionString7: 'Here, we have declared a string of 5 characters.',
        descriptionString8: 'How to initialize strings?',
        descriptionString9: 'You can initialize strings in a number of ways.\n',
        descriptionString10: "char c[] = 'abcd';\n\nchar c[50] = 'abcd';\n\nchar c[] = {'a', 'b', 'c', 'd', 'null'};\n\nchar c[5] = {'a', 'b', 'c', 'd', 'null'};",
        descriptionString11: 'Let us take another example:\n',
        descriptionString12: 'char c[5] = "abcde";',
        descriptionString13: "Here, we are trying to assign 6 characters (the last character is 'null') to a char array having 5 characters. This is bad and you should never do this.",
        descriptionString14: 'Assigning Values to Strings',
        descriptionString15: 'Arrays and strings are second-class citizens in C; they do not support the assignment operator once it is declared. For example,\n',
        descriptionString16: 'char c[100];\nc = "C programming";  // Error! array type is not assignable.',
        descriptionString17: 'Read String from the user',
        descriptionString18: 'You can use the scanf() function to read a string.\n\nThe scanf() function reads the sequence of characters until it encounters whitespace (space, newline, tab, etc.).',
        descriptionString19: 'Example: scanf() to read a string\n',
        descriptionString20: '#include <stdio.h>\nint main()\n{\n    char name[20];\n    printf("Enter name: ");\n    scanf("%s", name);\n    printf("Your name is %s.", name);\n    return 0;\n}',
        descriptionString21: 'Output\n',
        descriptionString22: 'Enter name: Dennis Ritchie\nYour name is Dennis.',
        descriptionString23: 'Even though Dennis Ritchie was entered in the above program, only "Dennis" was stored in the name string. It is because there was a space after Dennis.\nAlso notice that we have used the code name instead of &name with scanf().\n',
        descriptionString24: 'scanf("%s", name);',
        descriptionString25: 'This is because name is a char array, and we know that array names decay to pointers in C.\n\nThus, the name in scanf() already points to the address of the first element in the string, which is why we do not need to use &.',
        descriptionString26: 'How to read a line of text?\n',
        descriptionString27: 'You can use the fgets() function to read a line of string. And, you can use puts() to display the string.',
        descriptionString28: 'Example: fgets() and puts()\n',
        descriptionString29: '#include <stdio.h>\nint main() {\n    char name[30];\n    printf("Enter name: ");\n    fgets(name, sizeof(name), stdin);  // read string\n    printf("Name: ");\n    puts(name);    // display string\n    return 0;\n}',
        descriptionString30: 'Output\n',
        descriptionString31: 'Enter name: Tom Hanks\nName: Tom Hanks',
        descriptionString32: 'Here, we have used fgets() function to read a string from the user.\n\nfgets(name, sizeof(name), stdlin); // read string\n\nThe sizeof(name) results to 30. Hence, we can take a maximum of 30 characters as input which is the size of the name string.\n\nTo print the string, we have used puts(name);.',
        descriptionString33: 'Passing Strings to Functions',
        descriptionString34: 'Strings can be passed to a function in a similar way as arrays.',
        descriptionString35: 'Example: Passing string to a Function\n',
        descriptionString36: '#include <stdio.h>\nvoid displayString(char str[]);\n\nint main()\n{\n    char str[50];\n    printf("Enter string: ");\n    fgets(str, sizeof(str), stdin);\n    displayString(str);     // Passing string to a function.    \n    return 0;\n}\nvoid displayString(char str[])\n{\n    printf("String Output: ");\n    puts(str);\n}',
        descriptionString37: 'Strings and Pointers',
        descriptionString38: 'Similar like arrays, string names are "decayed" to pointers. Hence, you can use pointers to manipulate elements of the string. ',
        descriptionString39: 'Example: Strings and Pointers\n',
        descriptionString40: '#include <stdio.h>\n\nint main(void) {\nchar name[] = "Harry Potter";\n\nprintf("%c", *name);     // Output: H\nprintf("%c", *(name+1));   // Output: a\nprintf("%c", *(name+7));   // Output: o\n\nchar *namePtr;\n\nnamePtr = name;\nprintf("%c", *namePtr);     // Output: H\nprintf("%c", *(namePtr+1));   // Output: a\nprintf("%c", *(namePtr+7));   // Output: o\n}',

    },

    {
        name: 'String function',
        color: '#1ec2a4',
        description2: [],

    },

    {
        name: 'Functions & pointers',
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


