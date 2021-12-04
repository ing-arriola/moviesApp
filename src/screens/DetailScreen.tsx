import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigator';
import { ScrollView } from 'react-native-gesture-handler';
import { useMovieDetails } from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

const screenHeight= Dimensions.get('screen').height

const DetailScreen = ({route}:Props) => {
    const movie=route.params
    const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const {isLoading,movieFull,cast} = useMovieDetails(movie.id)
    console.log(isLoading)
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder} >
                    <Image
                        source={{uri}}
                        style={styles.posterImage}
                    />
                </View>
            </View>
            <View style={styles.marginContainer} >
                <Text style={styles.title} >
                    {movie.title}
                </Text>
            </View>
            <View style={styles.marginContainer} >
                {/* <Icon 
                    name='star-outline'
                    color='grey'
                    size={20}

                /> */}
                
            </View>
            {isLoading ? (<ActivityIndicator size={30} color='grey' />) : <MovieDetails movieFull={movieFull!} cast={cast} />}
            <Icon
                color='white'
                name='arrow-back-circle-outline'
                size={45}
                style={styles.backButton}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageBorder:{
        flex:1,
        borderBottomEndRadius:25,
        borderBottomStartRadius:25,
        overflow:'hidden',
    },
    imageContainer:{
        width:'100%',
        height:screenHeight *0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.36,
        shadowRadius: 7,
        elevation: 11,
        borderBottomEndRadius:25,
        borderBottomStartRadius:25,
    },
    posterImage:{
        flex:1
    },
    marginContainer:{
        marginHorizontal:20,
        marginTop:15
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    backButton:{
        top:15,
        left:5,
        position:'absolute',
        zIndex:1,
        elevation:12
        
    }
});

export default DetailScreen
