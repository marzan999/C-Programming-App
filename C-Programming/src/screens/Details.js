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

                    </View>
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}
