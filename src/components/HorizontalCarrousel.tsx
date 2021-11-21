import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Movie } from '../interfaces/movieDb'
import MoviePoster from '../screens/MoviePoster'

interface Props{
    ListOfMovies:Movie[]
    title?:string
}

const HorizontalCarrousel = ({ListOfMovies,title}:Props) => {
    return (
        <View style={{flex:1}} >
                    {title && (<Text style={{fontSize:25, fontWeight:'bold'}} >{title}</Text>)}
                    <FlatList
                        data={ListOfMovies}
                        renderItem={({item}:any) => <MoviePoster movie={item} width={140} height={175} marginH={8}/>}
                        keyExtractor={(item)=> item.id.toString()}
                        horizontal={true}
                    />
                </View>
    )
}

export default HorizontalCarrousel
