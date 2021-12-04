import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import currencyFormater from 'currency-formatter'
import { MovieFull } from '../interfaces/movieDb';
import { Cast } from '../interfaces/credits';
import Icon from 'react-native-vector-icons/Ionicons';
import CastMember from './CastMember';

interface Props{
    movieFull:MovieFull,
    cast:Cast[]
}

const MovieDetails = ({movieFull,cast}:Props) => {
    return (
        <>
            <View style={{marginHorizontal:20}} >
                <View style={{flexDirection:'row'}} >
                    <Icon 
                        name='star-outline'
                        color='grey'
                        size={16}
                    />
                    <Text> {movieFull.vote_average} </Text>
                    <Text>- { movieFull.genres.map(genre => genre.name).join(', ') }</Text>
                </View>  
                <Text style={styles.header}>Overview</Text>
                <Text>
                    {movieFull.overview}
                </Text>
                <Text style={styles.header} >Budget</Text>
                <Text>{currencyFormater.format(movieFull.budget,{code:'USD'})}</Text>
                <Text style={styles.header} >Actors</Text>
            </View>
            <FlatList
                data={cast}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item}) => <CastMember actor={ item } />}
                horizontal={true}
                style={{marginTop:10}}
            />
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        fontWeight:'bold',
        fontSize:20
    }
});

export default MovieDetails
