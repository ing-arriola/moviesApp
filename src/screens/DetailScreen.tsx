import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigator';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

const screenHeight= Dimensions.get('screen').height

const DetailScreen = ({route}:Props) => {
    const movie=route.params
    const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    console.log(uri)
    return (
        <View style={styles.imageContainer}>
            <Image
                source={{uri}}
                style={styles.posterImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width:'100%',
        height:screenHeight *0.7
    },
    posterImage:{
        flex:1
    }
});

export default DetailScreen
