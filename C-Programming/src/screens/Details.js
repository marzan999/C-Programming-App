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



                    </View>
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}
