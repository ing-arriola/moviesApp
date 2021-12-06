import React, { useContext } from 'react'
import { View, ActivityIndicator, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors'
import GradientBackground from '../components/GradientBackground';
import HorizontalCarrousel from '../components/HorizontalCarrousel';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from './MoviePoster';
import {getImageColors} from '../helpers/getColors'
import { GradientContext } from '../context/GradientContext';

const HomeScreen = () => {
    const { width:windowWidth } = Dimensions.get('window')
    const { nowInTheaters,popularMovies, topRated, upcoming,isLoading } = useMovies()
    const { top } = useSafeAreaInsets()
    const {setMainColors} = useContext(GradientContext)
    

    if(isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}} >
                <ActivityIndicator color='red' size={100}/>
            </View>
        )
    }

    const getPosterColors = async (index:number) => {
        const movie=nowInTheaters[index]
        const uri =`https://image.tmdb.org/t/p/w500${movie.poster_path}`
        const [primary= "green",secondary="orange"] = await getImageColors( uri ) 
        setMainColors({primary,secondary})   
    }
      
    return (
        <GradientBackground>
            <ScrollView>
                <View style={{marginTop:top+20,flex:1}} >
                    <View style={{flex:2}} >
                        <Carousel
                            data={nowInTheaters}
                            renderItem={({item}:any)=> <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={220}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)}
                        />
                    </View>
                    <HorizontalCarrousel
                        ListOfMovies={nowInTheaters}
                        title='In Theaters'
                    />
                    <HorizontalCarrousel
                        ListOfMovies={popularMovies}
                        title='Popular'
                    />
                    <HorizontalCarrousel
                        ListOfMovies={topRated}
                        title='Top Rated'
                    />
                    <HorizontalCarrousel
                        ListOfMovies={upcoming}
                        title='Upcoming'
                    />
                    
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default HomeScreen
