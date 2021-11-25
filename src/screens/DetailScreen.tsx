import React from 'react'
import { View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigator';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

const DetailScreen = ({route}:Props) => {
    const movie=route.params
    console.log(movie)
    return (
        <View>
            <Text>
            DetailScreen
            </Text>
        </View>
    )
}

export default DetailScreen
