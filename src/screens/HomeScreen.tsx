import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = () => {
    const nav=useNavigation()
    return (
        <View>
            <Text>
            HomeScreen
            </Text>
            <Button
                title='Ir detalles'
                onPress={()=>nav.navigate('DetailScreen')}
            />
        </View>
    )
}

export default HomeScreen
