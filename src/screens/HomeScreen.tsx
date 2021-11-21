import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from './MoviePoster';

const HomeScreen = () => {

    const {nowInTheaters,isLoading} = useMovies()
    const {top} = useSafeAreaInsets()

    if(isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}} >
                <ActivityIndicator color='red' size={100}/>
            </View>
        )
    }
      
    return (
        <View style={{marginTop:top+20}} >
            <MoviePoster
                movie={nowInTheaters[1]}
            />
        </View>
    )
}

export default HomeScreen
