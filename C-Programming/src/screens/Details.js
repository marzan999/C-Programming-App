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
        descriptionSC,
        descriptionOP,
        image,
        code,
        output,
        outputDescription,
        imageDT,
        descriptionDT,
        imageDT2,
        imageDT3,
        descriptionDT2,
        descriptionDT3,


    } = topic;

    return (

        <SafeAreaView style={{ backgroundColor: '#29595c', flex: 1 }}>
            <PlanetHeader backButton={true} topicName='back to home' customStyles={{ fontSize: spacing[5], color: colors.white }} />

            <ScrollView>
                <View style={{ paddingVertical: spacing[5] }}>
                    <View style={{ paddingHorizontal: spacing[4] }}>

                        <Text preset="h1" style={{ textAlign: 'center', color: '#40E0D0' }}>{name}</Text>

                        {image ? <Image source={image} style={{ alignSelf: 'center', width: 350, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}

                        <Text preset="h5" style={{ paddingTop: spacing[5], lineHeight: spacing[8] }}>{description}</Text>

                        {imageDT ? <Image source={imageDT} style={{ alignSelf: 'center', width: 350, height: 200, paddingTop: 300 }} resizeMode='contain' /> : null}

                        <Text preset="h5" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }} >{descriptionDT}</Text>

                        {imageDT2 ? <Image source={imageDT2} style={{ alignSelf: 'center', width: 400, height: 200, paddingTop: 100 }} resizeMode='contain' /> : null}

                        <Text preset="h5" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }}>{descriptionSC}</Text>

                        <Text preset="h2" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }}>{descriptionDT2}</Text>

                        <Text preset="h5" style={{ paddingTop: spacing[0], lineHeight: spacing[7] }}>{descriptionDT3}</Text>

                        {imageDT3 ? <Image source={imageDT3} style={{ alignSelf: 'center', width: 700, height: 350, paddingTop: 300 }} resizeMode='contain' /> : null}

                        {code ? <Text preset='h5' style={{ lineHeight: spacing[9], color: colors.orange, backgroundColor: '#266E73' }} selectable="true">{code}</Text> : null}

                        <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[7] }}>{descriptionOP}</Text>

                        {output ? <Text preset="h5" style={{ paddingTop: spacing[2], lineHeight: spacing[7], color: 'orange', backgroundColor: '#266E73' }}>{output}</Text> : null}

                        <Text preset="h5" style={{ paddingTop: spacing[7], lineHeight: spacing[8], color: 'white' }}>{outputDescription}</Text>

                    </View>
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}
