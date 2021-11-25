import React from 'react'
import { View, ActivityIndicator, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import HorizontalCarrousel from '../components/HorizontalCarrousel';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from './MoviePoster';

const HomeScreen = () => {
    const { width:windowWidth } = Dimensions.get('window')
    const { nowInTheaters,popularMovies, topRated, upcoming,isLoading } = useMovies()
    const { top } = useSafeAreaInsets()

    if(isLoading){
        return(
            <View style={{flex:1,justifyContent:'center',alignContent:'center'}} >
                <ActivityIndicator color='red' size={100}/>
            </View>
        )
    }
      
    return (
        <ScrollView>
            <View style={{marginTop:top+20,flex:1}} >
                <View style={{flex:2}} >
                    <Carousel
                        data={nowInTheaters}
                        renderItem={({item}:any)=> <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={220}
                        inactiveSlideOpacity={0.9}
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
    )
}

export default HomeScreen
