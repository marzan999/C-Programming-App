import React from 'react'
import { ScrollView, View, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { colors } from '../theme/color'
import { spacing } from '../theme/spacing'

export default function Details({ route }) {
    const { topic } = route.params;
    const { name, description, description2 } = topic;

    return (

        <SafeAreaView style={{ backgroundColor: '#556B2F', flex: 1 }}>
            <PlanetHeader backButton={true} topicName='back to home' customStyles={{ fontSize: spacing[5], color: colors.black }} />

            <ScrollView>
                <View style={{ paddingVertical: spacing[5], alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ paddingHorizontal: spacing[4] }}>
                        <Text preset="h1" style={{ textAlign: 'center' }}>
                            {name}
                        </Text>
                        <Text preset="h5" style={{ paddingTop: spacing[4], lineHeight: spacing[6] }}>
                            {description}
                        </Text>

                        <Text preset='h3' style={{ paddingTop: spacing[4] }}>Some examples of the use of C are -</Text>

                        {description2.map((element, index) => {
                            return <Text preset="h5" style={{ paddingTop: spacing[4], lineHeight: spacing[6] }} key={index}>{element}</Text>
                        })}
                    </View>
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}
