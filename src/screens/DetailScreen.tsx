import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/MainNavigator';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{}

const screenHeight= Dimensions.get('screen').height

const DetailScreen = ({route}:Props) => {
    const movie=route.params
    const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    console.log(movie.id)
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
                <Icon 
                    name='star-outline'
                    color='grey'
                    size={20}

                />
            </View>
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
    }
});

export default DetailScreen
