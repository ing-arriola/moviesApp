import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Movie } from '../interfaces/movieDb'

interface Props{
    movie:Movie
}

const MoviePoster = ({movie}:Props) => {
    const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
                <Image
                    source={{uri}}
                    style={styles.image}
                />
            </View>
        </View>
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
    },
    container:{
        width:200,
        height:400
    }
});

export default MoviePoster
