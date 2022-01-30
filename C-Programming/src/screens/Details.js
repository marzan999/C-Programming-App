import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { colors } from '../theme/color'
import { spacing } from '../theme/spacing'

export default function Details({ route }) {
    const { topic } = route.params;
    const { name,
        description,
        descriptionWisC,
        descriptionWisC2,
        descriptionSourceCodeHW,
        descriptionOutputHW,
        image,
        codeHW,
        outputHW,
        outputDescriptionHW,
        imageDT,
        descriptionDT,
        imageDT2,
        imageDT3,
        descriptionDT2,
        descriptionDT3,
        description1IO,
        descriptionIO,
        descriptionINT,
        descriptionCode,
        descriptionOutput,
        descriptionOPT,
        descriptionIO2,
        descriptionFLO,
        descriptionFLOCode,
        descriptionFLOOutput,
        descriptionFLOdescription,
        descriptionChe,
        descriptionCheCode,
        descriptionCheOutput,
        descriptionChedescription,
        description2FormetS1,
        description2FormetS2,
        description2FormetS3,
        imageIO,
        descriptionComments,
        descriptionCommentsDes,
        descriptionCommentsDes2,
        descriptionCommentsDes3,
        descriptionCommentsDes4,
        descriptionCommentsDes5,
        descriptionOperator1,
        descriptionOperator2,
        descriptionOperator3,
        descriptionOperator4,
        descriptionOperator5,
        descriptionOperator6,
        descriptionOperator7,
        descriptionOperator8,
        descriptionOperator9,
        descriptionOperator10,
        descriptionOperator11,
        descriptionOperator12,
        descriptionOperator13,
        descriptionOperator14,
        descriptionOperator15,
        descriptionOperator16,
        descriptionOperator17,
        descriptionOperator18,
        descriptionOperator19,
        descriptionOperator20,
        descriptionOperator21,
        descriptionOperator22,
        descriptionOperator23,
        descriptionOperator24,
        descriptionOperator25,
        descriptionOperator26,
        descriptionOperator27,
        descriptionOperator28,
        descriptionOperator29,
        descriptionOperator30,
        descriptionOperator31,
        descriptionOperator32,
        descriptionOperator33,
        descriptionOperator34,
        descriptionOperator35,
        descriptionOperator36,
        descriptionOperator37,
        imageOP,
        imageOP3,
        imageOP4,
        imageOP5,
        imageOP6,
        imageSW1,
        descriptionSwitchStatement1,
        descriptionSwitchStatement2,
        descriptionSwitchStatement3,
        descriptionSwitchStatement4,
        descriptionSwitchStatement5,
        descriptionSwitchStatement6,
        descriptionSwitchStatement7,
        descriptionSwitchStatement8,
        descriptionSwitchStatement9,
        descriptionSwitchStatement10,
        descriptionSwitchStatement11,
        descriptionSwitchStatement12,
        descriptionSwitchStatement13,
        descriptionSwitchStatement14,
        imageCON,
        imageCON2,
        descriptionConditions1,
        descriptionConditions2,
        descriptionConditions3,
        descriptionConditions4,
        descriptionConditions5,
        descriptionConditions6,
        descriptionConditions7,
        descriptionConditions8,
        descriptionConditions9,
        descriptionConditions10,
        descriptionConditions11,
        descriptionConditions12,
        descriptionConditions13,
        descriptionConditions14,
        descriptionConditions15,
        descriptionConditions16,
        descriptionConditions17,
        descriptionConditions18,
        descriptionConditions19,
        descriptionConditions20,
        descriptionConditions21,
        descriptionNested1,
        descriptionNested2,
        descriptionNested3,
        imageWhile,
        imageFor,
        imageDoW,
        descriptionloop1,
        descriptionloop2,
        descriptionloop3,
        descriptionloop4,
        descriptionloop5,
        descriptionloop6,
        descriptionloop7,
        descriptionloop8,
        descriptionloop9,
        descriptionloop10,
        descriptionloop11,
        descriptionloop12,
        descriptionloop13,
        descriptionloop14,
        descriptionloop15,
        descriptionloop16,
        descriptionloop17,
        descriptionloop18,
        descriptionloop19,
        descriptionloop20,
        descriptionloop21,
        descriptionloop22,
        descriptionloop23,
        descriptionloop24,
        descriptionloop25,
        descriptionloop26,
        descriptionloop27,
        descriptionloop28,
        descriptionloop29,
        descriptionloop30,
        descriptionloop31,
        descriptionloop32,
        descriptionloop33,
        descriptionloop34,
        descriptionloop35,
        descriptionloop36,
        imageBreak,
        imageContinue,
        descriptionBreak1,
        descriptionBreak2,
        descriptionBreak3,
        descriptionBreak4,
        descriptionBreak5,
        descriptionBreak6,
        descriptionBreak7,
        descriptionBreak8,
        descriptionBreak9,
        descriptionBreak10,
        descriptionBreak11,
        descriptionBreak12,
        descriptionBreak13,
        descriptionBreak14,
        descriptionBreak15,
        descriptionBreak16,
        imageFunction,
        descriptionFunction1,
        descriptionFunction2,
        descriptionFunction3,
        descriptionFunction4,
        descriptionFunction5,
        descriptionFunction6,
        descriptionFunction7,
        descriptionFunction8,
        descriptionFunction9,
        descriptionFunction10,
        descriptionFunction11,
        descriptionFunction12,
        descriptionFunction13,
        descriptionFunction14,
        imageArray1,
        imageArray2,
        imageArray3,
        descriptionArray0,
        descriptionArray2,
        descriptionArray3,
        descriptionArray4,
        descriptionArray5,
        descriptionArray6,
        descriptionArray7,
        descriptionArray8,
        descriptionArray9,
        descriptionArray10,
        descriptionArray11,
        descriptionArray12,
        descriptionArray13,
        descriptionArray14,
        descriptionArray15,
        descriptionArray16,
        descriptionArray17,
        descriptionArray18,
        descriptionArray19,
        descriptionArray20,
        descriptionArray21,
        descriptionArray22,
        descriptionArray23,
        descriptionArray24,
        descriptionArray25,
        descriptionArray26,
        descriptionArray27,
        descriptionArray28,
        descriptionArray29,
        descriptionArray30,
        descriptionArray31,
        imageMultiD,
        descriptionMultiD1,
        descriptionMultiD2,
        descriptionMultiD3,
        descriptionMultiD4,
        descriptionMultiD5,
        descriptionMultiD6,
        descriptionMultiD7,
        descriptionMultiD8,
        descriptionMultiD9,
        descriptionMultiD10,
        descriptionMultiD11,
        descriptionMultiD12,
        descriptionMultiD13,
        descriptionMultiD14,
        descriptionMultiD15,
        descriptionMultiD16,
        descriptionMultiD17,
        descriptionMultiD18,
        descriptionMultiD19,
        descriptionMultiD20,
        descriptionMultiD21,
        descriptionFA1,
        descriptionFA2,
        descriptionFA3,
        descriptionFA4,
        descriptionFA5,
        descriptionFA6,
        descriptionFA7,
        descriptionFA8,
        descriptionFA9,
        descriptionFA9a,
        descriptionFA10,
        descriptionFA11,
        descriptionFA12,
        descriptionFA13,
        descriptionFA14,
        descriptionFA15,
        descriptionFA16,
        descriptionFA17,
        descriptionFA18,
        descriptionFA19,
        descriptionFA20,
        descriptionFA21,
        descriptionFA22,
        descriptionFA23,
        descriptionFA24,
        descriptionFA25,
        descriptionFA26,
        descriptionFA27,
        descriptionFA28,
        descriptionFA29,
        descriptionFA30,
        descriptionPointers1,
        descriptionPointers2,
        descriptionPointers3,
        descriptionPointers4,
        descriptionPointers5,
        descriptionPointers6,
        descriptionPointers7,
        descriptionPointers8,
        descriptionPointers9,
        descriptionPointers10,
        descriptionPointers11,
        descriptionPointers12,
        descriptionPointers13,
        descriptionPointers14,
        descriptionPointers15,
        descriptionPointers16,
        descriptionPointers17,
        descriptionPointers18,
        descriptionPointers19,
        descriptionPointers20,
        descriptionPointers21,
        descriptionPointers22,
        descriptionPointers23,
        descriptionPointers24,
        descriptionPointers25,
        descriptionPointers26,
        descriptionPointers27,
        descriptionPointers28,
        descriptionPointers29,
        descriptionPointers30,
        descriptionPointers31,
        descriptionPointers32,
        descriptionPointers33,
        descriptionPointers34,
        descriptionPointers35,
        descriptionPointers36,
        descriptionPointers37,
        imageStr1,
        imageStr2,
        imageStr3,
        descriptionString1,
        descriptionString2,
        descriptionString3,
        descriptionString4,
        descriptionString5,
        descriptionString6,
        descriptionString7,
        descriptionString8,
        descriptionString9,
        descriptionString10,
        descriptionString11,
        descriptionString12,
        descriptionString13,
        descriptionString14,
        descriptionString15,
        descriptionString16,
        descriptionString17,
        descriptionString18,
        descriptionString19,
        descriptionString20,
        descriptionString21,
        descriptionString22,
        descriptionString23,
        descriptionString24,
        descriptionString25,
        descriptionString26,
        descriptionString27,
        descriptionString28,
        descriptionString29,
        descriptionString30,
        descriptionString31,
        descriptionString32,
        descriptionString33,
        descriptionString34,
        descriptionString35,
        descriptionString36,
        descriptionString37,
        descriptionString38,
        descriptionString39,
        descriptionString40,
        imageSF,
        descriptionSF1,
        descriptionSF2,
        descriptionSF3,
        descriptionSF4,
        descriptionSF5,
        descriptionSF6,
        descriptionSF7,
        descriptionSF8,
        descriptionSF9,


    } = topic;

    return (

        <SafeAreaView style={{ backgroundColor: '#29595c', flex: 1 }}>
            <PlanetHeader backButton={true} topicName='back to home' customStyles={{ fontSize: spacing[5], color: colors.white }} />

            <ScrollView>
                <View style={{ paddingVertical: spacing[5] }}>
                    <View style={{ paddingHorizontal: spacing[4] }}>

                        <Text preset="h1" style={{ textAlign: 'center', color: '#40E0D0' }}>{name}</Text>

                        {image ? <Image source={image} style={{ alignSelf: 'center', width: 350, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {description ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{description}</Text> : null}
                        {descriptionWisC ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionWisC}</Text> : null}
                        {descriptionWisC2 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionWisC2}</Text> : null}
                        {description1IO ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{description1IO}</Text> : null}
                        {descriptionIO ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionIO}</Text> : null}
                        {descriptionINT ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionINT}</Text> : null}
                        {descriptionCode ? <Text preset='h5' style={{ lineHeight: spacing[9], color: colors.orange, backgroundColor: '#266E73' }} selectable="true">{descriptionCode}</Text> : null}
                        {descriptionOPT ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOPT}</Text> : null}
                        {descriptionOutput ? <Text preset='h5' style={{ lineHeight: spacing[9], color: colors.orange, backgroundColor: '#266E73' }} selectable="true">{descriptionOutput}</Text> : null}
                        {descriptionIO2 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionIO2}</Text> : null}
                        {descriptionFLO ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionFLO}</Text> : null}
                        {descriptionFLOCode ? <Text preset='h5' style={{ lineHeight: spacing[9], color: colors.orange, backgroundColor: '#266E73' }} selectable="true">{descriptionFLOCode}</Text> : null}
                        {descriptionOPT ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOPT}</Text> : null}
                        {descriptionFLOOutput ? <Text preset='h5' style={{ lineHeight: spacing[9], color: colors.orange, backgroundColor: '#266E73' }} selectable="true">{descriptionFLOOutput}</Text> : null}
                        {descriptionFLOdescription ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionFLOdescription}</Text> : null}
                        {descriptionChe ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionChe}</Text> : null}
                        {descriptionCheCode ? <Text preset='h5' style={{ lineHeight: spacing[9], color: colors.orange, backgroundColor: '#266E73' }} selectable="true">{descriptionCheCode}</Text> : null}
                        {descriptionOPT ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOPT}</Text> : null}
                        {descriptionCheOutput ? <Text preset='h5' style={{ lineHeight: spacing[9], color: colors.orange, backgroundColor: '#266E73' }} selectable="true">{descriptionCheOutput}</Text> : null}
                        {descriptionChedescription ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionChedescription}</Text> : null}
                        {description2FormetS1 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{description2FormetS1}</Text> : null}
                        {description2FormetS2 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[9] }}>{description2FormetS2}</Text> : null}
                        {description2FormetS3 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[9] }}>{description2FormetS3}</Text> : null}

                        {imageIO ? <Image source={imageIO} style={{ alignSelf: 'center', width: 650, height: 370, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {imageDT ? <Image source={imageDT} style={{ alignSelf: 'center', width: 350, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionDT ? <Text preset="h5" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }} >{descriptionDT}</Text> : null}
                        {imageDT2 ? <Image source={imageDT2} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 100 }} resizeMode='contain' /> : null}
                        {descriptionSourceCodeHW ? <Text preset="h5" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }}>{descriptionSourceCodeHW}</Text> : null}
                        {descriptionDT2 ? <Text preset="h2" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }}>{descriptionDT2}</Text> : null}
                        {descriptionDT3 ? <Text preset="h5" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }}>{descriptionDT3}</Text> : null}
                        {imageDT3 ? <Image source={imageDT3} style={{ alignSelf: 'center', width: 700, height: 350, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {codeHW ? <Text preset='h5' style={{ lineHeight: spacing[9], color: colors.orange, backgroundColor: '#266E73' }} selectable="true">{codeHW}</Text> : null}
                        {descriptionOutputHW ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[7] }}>{descriptionOutputHW}</Text> : null}
                        {outputHW ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }}>{outputHW}</Text> : null}
                        {outputDescriptionHW ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{outputDescriptionHW}</Text> : null}

                        {descriptionComments ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionComments}</Text> : null}
                        {descriptionCommentsDes ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionCommentsDes}</Text> : null}
                        {descriptionCommentsDes2 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionCommentsDes2}</Text> : null}
                        {descriptionCommentsDes3 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionCommentsDes3}</Text> : null}
                        {descriptionCommentsDes4 ? <Text preset="h5" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }}>{descriptionCommentsDes4}</Text> : null}
                        {descriptionCommentsDes5 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionCommentsDes5}</Text> : null}

                        {descriptionOperator1 ? <Text preset="h5" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }}>{descriptionOperator1}</Text> : null}
                        {descriptionOperator2 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator2}</Text> : null}
                        {descriptionOperator3 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionOperator3}</Text> : null}
                        {imageOP ? <Image source={imageOP} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionOperator4 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator4}</Text> : null}
                        {descriptionOperator5 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionOperator5}</Text> : null}
                        {descriptionOperator6 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator6}</Text> : null}
                        {descriptionOperator7 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionOperator7}</Text> : null}
                        {descriptionOperator8 ? <Text preset="h5" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }}>{descriptionOperator8}</Text> : null}

                        {descriptionOperator9 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator9}</Text> : null}
                        {descriptionOperator10 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionOperator10}</Text> : null}
                        {descriptionOperator11 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator11}</Text> : null}
                        {descriptionOperator12 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionOperator12}</Text> : null}
                        {descriptionOperator13 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator13}</Text> : null}
                        {descriptionOperator14 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionOperator14}</Text> : null}
                        {descriptionOperator15 ? <Text preset="h5" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }}>{descriptionOperator15}</Text> : null}

                        {descriptionOperator16 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator16}</Text> : null}
                        {descriptionOperator17 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionOperator17}</Text> : null}
                        {imageOP3 ? <Image source={imageOP3} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionOperator18 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator18}</Text> : null}
                        {descriptionOperator19 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionOperator19}</Text> : null}
                        {descriptionOperator20 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator20}</Text> : null}
                        {descriptionOperator21 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionOperator21}</Text> : null}

                        {descriptionOperator22 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator22}</Text> : null}
                        {descriptionOperator23 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionOperator23}</Text> : null}
                        {imageOP4 ? <Image source={imageOP4} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionOperator24 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator24}</Text> : null}
                        {descriptionOperator25 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionOperator25}</Text> : null}
                        {descriptionOperator26 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator26}</Text> : null}
                        {descriptionOperator27 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionOperator27}</Text> : null}

                        {descriptionOperator28 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator28}</Text> : null}
                        {descriptionOperator29 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator29}</Text> : null}
                        {imageOP5 ? <Image source={imageOP5} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionOperator30 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionOperator30}</Text> : null}
                        {descriptionOperator31 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionOperator31}</Text> : null}
                        {descriptionOperator32 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator32}</Text> : null}
                        {descriptionOperator33 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionOperator33}</Text> : null}
                        {descriptionOperator34 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator34}</Text> : null}
                        {descriptionOperator35 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator35}</Text> : null}

                        {descriptionOperator36 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator36}</Text> : null}
                        {descriptionOperator37 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionOperator37}</Text> : null}
                        {imageOP6 ? <Image source={imageOP6} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}




                        {descriptionSwitchStatement1 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionSwitchStatement1}</Text> : null}
                        {descriptionSwitchStatement2 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionSwitchStatement2}</Text> : null}
                        {descriptionSwitchStatement3 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionSwitchStatement3}</Text> : null}
                        {descriptionSwitchStatement4 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionSwitchStatement4}</Text> : null}
                        {descriptionSwitchStatement5 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionSwitchStatement5}</Text> : null}
                        {descriptionSwitchStatement6 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionSwitchStatement6}</Text> : null}
                        {descriptionSwitchStatement7 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionSwitchStatement7}</Text> : null}
                        {imageSW1 ? <Image source={imageSW1} style={{ alignSelf: 'center', width: 600, height: 500, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionSwitchStatement8 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionSwitchStatement8}</Text> : null}
                        {descriptionSwitchStatement9 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionSwitchStatement9}</Text> : null}
                        {descriptionSwitchStatement10 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionSwitchStatement10}</Text> : null}
                        {descriptionSwitchStatement11 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionSwitchStatement11}</Text> : null}
                        {descriptionSwitchStatement12 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionSwitchStatement12}</Text> : null}
                        {descriptionSwitchStatement13 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionSwitchStatement13}</Text> : null}
                        {descriptionSwitchStatement14 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionSwitchStatement14}</Text> : null}


                        {descriptionConditions1 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionConditions1}</Text> : null}
                        {descriptionConditions2 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionConditions2}</Text> : null}
                        {descriptionConditions3 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionConditions3}</Text> : null}
                        {descriptionConditions4 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionConditions4}</Text> : null}
                        {descriptionConditions5 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionConditions5}</Text> : null}
                        {descriptionConditions6 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionConditions6}</Text> : null}
                        {imageCON ? <Image source={imageCON} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 100 }} resizeMode='contain' /> : null}
                        {descriptionConditions7 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionConditions7}</Text> : null}
                        {descriptionConditions8 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionConditions8}</Text> : null}
                        {descriptionConditions9 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionConditions9}</Text> : null}
                        {descriptionConditions10 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionConditions10}</Text> : null}
                        {descriptionConditions11 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionConditions11}</Text> : null}
                        {descriptionConditions12 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionConditions12}</Text> : null}
                        {descriptionConditions13 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionConditions13}</Text> : null}
                        {descriptionConditions14 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionConditions14}</Text> : null}
                        {descriptionConditions15 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionConditions15}</Text> : null}
                        {descriptionConditions16 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionConditions16}</Text> : null}
                        {imageCON2 ? <Image source={imageCON2} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 100 }} resizeMode='contain' /> : null}
                        {descriptionConditions17 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionConditions17}</Text> : null}
                        {descriptionConditions18 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionConditions18}</Text> : null}
                        {descriptionConditions19 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionConditions19}</Text> : null}
                        {descriptionConditions20 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionConditions20}</Text> : null}
                        {descriptionConditions21 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionConditions21}</Text> : null}

                        {descriptionNested1 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionNested1}</Text> : null}
                        {descriptionNested2 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionNested2}</Text> : null}
                        {descriptionNested3 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionNested3}</Text> : null}

                        {descriptionloop1 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionloop1}</Text> : null}
                        {descriptionloop13 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop13}</Text> : null}
                        {descriptionloop14 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionloop14}</Text> : null}
                        {descriptionloop15 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionloop15}</Text> : null}
                        {descriptionloop16 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop16}</Text> : null}
                        {descriptionloop17 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionloop17}</Text> : null}
                        {descriptionloop18 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop18}</Text> : null}
                        {imageFor ? <Image source={imageFor} style={{ alignSelf: 'center', width: 400, height: 400, paddingTop: 100 }} resizeMode='contain' /> : null}
                        {descriptionloop19 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop19}</Text> : null}
                        {descriptionloop20 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionloop20}</Text> : null}
                        {descriptionloop21 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop21}</Text> : null}
                        {descriptionloop22 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionloop22}</Text> : null}
                        {descriptionloop23 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionloop23}</Text> : null}
                        {descriptionloop2 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop2}</Text> : null}
                        {descriptionloop3 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionloop3}</Text> : null}
                        {descriptionloop4 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionloop4}</Text> : null}
                        {descriptionloop5 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop5}</Text> : null}
                        {descriptionloop6 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionloop6}</Text> : null}
                        {descriptionloop7 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop7}</Text> : null}
                        {imageWhile ? <Image source={imageWhile} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionloop8 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop8}</Text> : null}
                        {descriptionloop9 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionloop9}</Text> : null}
                        {descriptionloop10 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop10}</Text> : null}
                        {descriptionloop11 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionloop11}</Text> : null}
                        {descriptionloop12 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionloop12}</Text> : null}


                        {descriptionloop24 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop24}</Text> : null}
                        {descriptionloop25 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionloop25}</Text> : null}
                        {descriptionloop26 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionloop26}</Text> : null}
                        {descriptionloop27 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop27}</Text> : null}
                        {descriptionloop28 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionloop28}</Text> : null}
                        {descriptionloop29 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop29}</Text> : null}
                        {imageDoW ? <Image source={imageDoW} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionloop30 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop30}</Text> : null}
                        {descriptionloop31 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionloop31}</Text> : null}
                        {descriptionloop32 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop32}</Text> : null}
                        {descriptionloop33 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionloop33}</Text> : null}
                        {descriptionloop34 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop34}</Text> : null}
                        {descriptionloop35 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionloop35}</Text> : null}
                        {descriptionloop36 ? <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionloop36}</Text> : null}

                        {descriptionBreak1 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionBreak1}</Text> : null}
                        {descriptionBreak2 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionBreak2}</Text> : null}
                        {descriptionBreak3 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionBreak3}</Text> : null}
                        {imageBreak ? <Image source={imageBreak} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionBreak4 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionBreak4}</Text> : null}
                        {descriptionBreak5 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionBreak5}</Text> : null}
                        {descriptionBreak6 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionBreak6}</Text> : null}
                        {descriptionBreak7 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionBreak7}</Text> : null}
                        {descriptionBreak8 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionBreak8}</Text> : null}
                        {descriptionBreak9 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionBreak9}</Text> : null}
                        {descriptionBreak10 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionBreak10}</Text> : null}
                        {descriptionBreak11 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionBreak11}</Text> : null}
                        {imageContinue ? <Image source={imageContinue} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionBreak12 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionBreak12}</Text> : null}
                        {descriptionBreak13 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionBreak13}</Text> : null}
                        {descriptionBreak14 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionBreak14}</Text> : null}
                        {descriptionBreak15 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionBreak15}</Text> : null}
                        {descriptionBreak16 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionBreak16}</Text> : null}


                        {descriptionFunction1 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFunction1}</Text> : null}
                        {descriptionFunction2 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionFunction2}</Text> : null}
                        {descriptionFunction3 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFunction3}</Text> : null}
                        {descriptionFunction4 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionFunction4}</Text> : null}
                        {descriptionFunction5 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFunction5}</Text> : null}
                        {descriptionFunction6 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionFunction6}</Text> : null}
                        {descriptionFunction7 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFunction7}</Text> : null}
                        {descriptionFunction8 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionFunction8}</Text> : null}
                        {descriptionFunction9 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFunction9}</Text> : null}
                        {descriptionFunction10 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFunction10}</Text> : null}
                        {descriptionFunction11 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFunction11}</Text> : null}
                        {descriptionFunction12 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFunction12}</Text> : null}
                        {descriptionFunction13 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionFunction13}</Text> : null}
                        {imageFunction ? <Image source={imageFunction} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionFunction14 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFunction14}</Text> : null}

                        {imageArray1 ? <Image source={imageArray1} style={{ alignSelf: 'center', width: 400, height: 100, paddingTop: 300 }} resizeMode='contain' /> : null}
                        {descriptionArray0 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray0}</Text> : null}
                        {descriptionArray2 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray2}</Text> : null}
                        {descriptionArray3 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionArray3}</Text> : null}
                        {descriptionArray4 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray4}</Text> : null}
                        {descriptionArray5 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray5}</Text> : null}
                        {descriptionArray6 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray6}</Text> : null}
                        {descriptionArray7 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray7}</Text> : null}
                        {descriptionArray8 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionArray8}</Text> : null}
                        {descriptionArray9 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray9}</Text> : null}
                        {imageArray2 ? <Image source={imageArray2} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 200 }} resizeMode='contain' /> : null}
                        {descriptionArray10 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionArray10}</Text> : null}
                        {descriptionArray11 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray11}</Text> : null}
                        {descriptionArray12 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionArray12}</Text> : null}
                        {descriptionArray13 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray13}</Text> : null}
                        {descriptionArray14 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray14}</Text> : null}
                        {descriptionArray15 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray15}</Text> : null}
                        {descriptionArray16 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray16}</Text> : null}
                        {descriptionArray17 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray17}</Text> : null}
                        {imageArray3 ? <Image source={imageArray3} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 200 }} resizeMode='contain' /> : null}
                        {descriptionArray18 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray18}</Text> : null}
                        {descriptionArray19 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray19}</Text> : null}
                        {descriptionArray20 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionArray20}</Text> : null}
                        {descriptionArray21 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray21}</Text> : null}
                        {descriptionArray22 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionArray22}</Text> : null}
                        {descriptionArray23 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray23}</Text> : null}
                        {descriptionArray24 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray24}</Text> : null}
                        {descriptionArray25 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray25}</Text> : null}
                        {descriptionArray26 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray26}</Text> : null}
                        {descriptionArray27 ? <Text preset="h2" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{descriptionArray27}</Text> : null}
                        {descriptionArray28 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray28}</Text> : null}
                        {descriptionArray29 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray29}</Text> : null}
                        {descriptionArray30 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionArray30}</Text> : null}
                        {descriptionArray31 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionArray31}</Text> : null}


                        {descriptionMultiD1 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD1}</Text> : null}
                        {descriptionMultiD2 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionMultiD2}</Text> : null}
                        {descriptionMultiD3 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD3}</Text> : null}
                        {imageMultiD ? <Image source={imageMultiD} style={{ alignSelf: 'center', width: 400, height: 300, paddingTop: 200 }} resizeMode='contain' /> : null}
                        {descriptionMultiD4 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD4}</Text> : null}
                        {descriptionMultiD5 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionMultiD5}</Text> : null}
                        {descriptionMultiD6 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD6}</Text> : null}
                        {descriptionMultiD7 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD7}</Text> : null}
                        {descriptionMultiD8 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD8}</Text> : null}
                        {descriptionMultiD9 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD9}</Text> : null}
                        {descriptionMultiD10 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionMultiD10}</Text> : null}
                        {descriptionMultiD11 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD11}</Text> : null}
                        {descriptionMultiD12 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD12}</Text> : null}
                        {descriptionMultiD13 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionMultiD13}</Text> : null}
                        {descriptionMultiD14 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD14}</Text> : null}
                        {descriptionMultiD15 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionMultiD15}</Text> : null}
                        {descriptionMultiD16 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD16}</Text> : null}
                        {descriptionMultiD17 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionMultiD17}</Text> : null}
                        {descriptionMultiD18 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD18}</Text> : null}
                        {descriptionMultiD19 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionMultiD19}</Text> : null}
                        {descriptionMultiD20 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionMultiD20}</Text> : null}
                        {descriptionMultiD21 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[9], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionMultiD21}</Text> : null}

                        {descriptionFA1 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA1}</Text> : null}
                        {descriptionFA2 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA2}</Text> : null}
                        {descriptionFA3 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA3}</Text> : null}
                        {descriptionFA4 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA4}</Text> : null}
                        {descriptionFA5 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA5}</Text> : null}
                        {descriptionFA6 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA6}</Text> : null}
                        {descriptionFA7 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA7}</Text> : null}
                        {descriptionFA8 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA8}</Text> : null}
                        {descriptionFA9 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA9}</Text> : null}
                        {descriptionFA9a ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA9a}</Text> : null}
                        {descriptionFA10 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA10}</Text> : null}
                        {descriptionFA11 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA11}</Text> : null}
                        {descriptionFA12 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA12}</Text> : null}
                        {descriptionFA13 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA13}</Text> : null}
                        {descriptionFA14 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA14}</Text> : null}
                        {descriptionFA15 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA15}</Text> : null}
                        {descriptionFA16 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA16}</Text> : null}
                        {descriptionFA17 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA17}</Text> : null}
                        {descriptionFA18 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA18}</Text> : null}
                        {descriptionFA19 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA19}</Text> : null}
                        {descriptionFA20 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA20}</Text> : null}
                        {descriptionFA21 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA21}</Text> : null}
                        {descriptionFA22 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA22}</Text> : null}
                        {descriptionFA23 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA23}</Text> : null}
                        {descriptionFA24 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA24}</Text> : null}
                        {descriptionFA25 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA25}</Text> : null}
                        {descriptionFA26 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA26}</Text> : null}
                        {descriptionFA27 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA27}</Text> : null}
                        {descriptionFA28 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA28}</Text> : null}
                        {descriptionFA29 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionFA29}</Text> : null}
                        {descriptionFA30 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionFA30}</Text> : null}



                        {descriptionPointers1 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers1}</Text> : null}
                        {descriptionPointers2 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers2}</Text> : null}
                        {descriptionPointers3 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers3}</Text> : null}
                        {descriptionPointers4 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers4}</Text> : null}
                        {descriptionPointers5 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers5}</Text> : null}
                        {descriptionPointers6 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers6}</Text> : null}
                        {descriptionPointers7 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers7}</Text> : null}
                        {descriptionPointers8 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers8}</Text> : null}
                        {descriptionPointers9 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers9}</Text> : null}
                        {descriptionPointers10 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers10}</Text> : null}
                        {descriptionPointers11 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers11}</Text> : null}
                        {descriptionPointers12 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers12}</Text> : null}
                        {descriptionPointers13 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers13}</Text> : null}
                        {descriptionPointers14 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers14}</Text> : null}
                        {descriptionPointers15 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers15}</Text> : null}
                        {descriptionPointers16 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers16}</Text> : null}
                        {descriptionPointers17 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers17}</Text> : null}
                        {descriptionPointers18 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers18}</Text> : null}
                        {descriptionPointers19 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers19}</Text> : null}
                        {descriptionPointers20 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers20}</Text> : null}
                        {descriptionPointers21 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers21}</Text> : null}
                        {descriptionPointers22 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers22}</Text> : null}
                        {descriptionPointers23 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers23}</Text> : null}
                        {descriptionPointers24 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers24}</Text> : null}
                        {descriptionPointers25 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers25}</Text> : null}
                        {descriptionPointers26 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers26}</Text> : null}
                        {descriptionPointers27 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers27}</Text> : null}
                        {descriptionPointers28 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers28}</Text> : null}
                        {descriptionPointers29 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers29}</Text> : null}
                        {descriptionPointers30 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers30}</Text> : null}
                        {descriptionPointers31 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers31}</Text> : null}
                        {descriptionPointers32 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers32}</Text> : null}
                        {descriptionPointers33 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers33}</Text> : null}
                        {descriptionPointers34 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers34}</Text> : null}
                        {descriptionPointers35 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers35}</Text> : null}
                        {descriptionPointers36 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionPointers36}</Text> : null}
                        {descriptionPointers37 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionPointers37}</Text> : null}



                        {descriptionString1 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString1}</Text> : null}
                        {descriptionString2 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString2}</Text> : null}
                        {descriptionString3 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString3}</Text> : null}
                        {imageStr1 ? <Image source={imageStr1} style={{ alignSelf: 'center', width: 400, height: 100, paddingTop: 200 }} resizeMode='contain' /> : null}
                        {descriptionString4 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString4}</Text> : null}
                        {descriptionString5 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString5}</Text> : null}
                        {descriptionString6 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString6}</Text> : null}
                        {imageStr2 ? <Image source={imageStr2} style={{ alignSelf: 'center', width: 400, height: 250, paddingTop: 200 }} resizeMode='contain' /> : null}
                        {descriptionString7 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString7}</Text> : null}
                        {descriptionString8 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString8}</Text> : null}
                        {descriptionString9 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString9}</Text> : null}
                        {descriptionString10 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString10}</Text> : null}
                        {imageStr3 ? <Image source={imageStr3} style={{ alignSelf: 'center', width: 400, height: 250, paddingTop: 200 }} resizeMode='contain' /> : null}
                        {descriptionString11 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString11}</Text> : null}
                        {descriptionString12 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString12}</Text> : null}
                        {descriptionString13 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString13}</Text> : null}
                        {descriptionString14 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString14}</Text> : null}
                        {descriptionString15 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString15}</Text> : null}
                        {descriptionString16 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString16}</Text> : null}
                        {descriptionString17 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString17}</Text> : null}
                        {descriptionString18 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString18}</Text> : null}
                        {descriptionString19 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString19}</Text> : null}
                        {descriptionString20 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString20}</Text> : null}
                        {descriptionString21 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString21}</Text> : null}
                        {descriptionString22 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString22}</Text> : null}
                        {descriptionString23 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString23}</Text> : null}
                        {descriptionString24 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString24}</Text> : null}
                        {descriptionString25 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString25}</Text> : null}
                        {descriptionString26 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString26}</Text> : null}
                        {descriptionString27 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString27}</Text> : null}
                        {descriptionString28 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString28}</Text> : null}
                        {descriptionString29 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString29}</Text> : null}
                        {descriptionString30 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString30}</Text> : null}
                        {descriptionString31 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString31}</Text> : null}
                        {descriptionString32 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString32}</Text> : null}
                        {descriptionString33 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString33}</Text> : null}
                        {descriptionString34 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString34}</Text> : null}
                        {descriptionString35 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString35}</Text> : null}
                        {descriptionString36 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString36}</Text> : null}
                        {descriptionString37 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString37}</Text> : null}
                        {descriptionString38 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString38}</Text> : null}
                        {descriptionString39 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionString39}</Text> : null}
                        {descriptionString40 ? <Text preset="h7" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionString40}</Text> : null}


                        {descriptionSF1 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionSF1}</Text> : null}
                        {descriptionSF2 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionSF2}</Text> : null}
                        {imageSF ? <Image source={imageSF} style={{ alignSelf: 'center', width: 400, height: 250, paddingTop: 200 }} resizeMode='contain' /> : null}
                        {descriptionSF3 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionSF3}</Text> : null}
                        {descriptionSF4 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionSF4}</Text> : null}
                        {descriptionSF5 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionSF5}</Text> : null}
                        {descriptionSF6 ? <Text preset="h2" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionSF6}</Text> : null}
                        {descriptionSF7 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionSF7}</Text> : null}
                        {descriptionSF8 ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[8], color: 'orange', backgroundColor: '#266E73' }} selectable="true">{descriptionSF8}</Text> : null}
                        {descriptionSF9 ? <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{descriptionSF9}</Text> : null}


                    </View>
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}
