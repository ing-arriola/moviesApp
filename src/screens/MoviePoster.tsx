import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieDb'
import { RootStackParams } from '../navigation/MainNavigator';

interface Props{
    movie:Movie
    height?:number
    width?:number
    marginH?:number
}

const MoviePoster = ({width=200,height=400,movie,marginH=0}:Props) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

    const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('DetailScreen' as never,movie as never)}
            activeOpacity={0.8} 
            style={{flex:1,height,width,marginHorizontal:marginH,paddingBottom:20,paddingHorizontal:5}}>
            <View style={styles.imageContainer} >
                <Image
                    source={{uri}}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:20
    },
    imageContainer:{
        flex:1,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.36,
        shadowRadius: 7,
        elevation: 11,
    }
});

export default MoviePoster
