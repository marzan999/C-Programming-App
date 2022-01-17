import React from 'react'
import { ScrollView, View, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { colors } from '../theme/color'
import { spacing } from '../theme/spacing'

export default function Details({ route }) {
    const { topic } = route.params;
    const { name, description } = topic;

    return (

        <SafeAreaView style={{ backgroundColor: colors.black, flex: 1 }}>
            <PlanetHeader backButton={true} topicName='back' />

            <ScrollView>
                <View style={{ paddingVertical: spacing[5], alignItems: 'center', justifyContent: 'center' }}>
                    <View>
                        <Text preset="h1">
                            {name}
                        </Text>
                        <Text>
                            {description}
                        </Text>
                    </View>
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}
