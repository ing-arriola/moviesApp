import { useEffect, useState } from "react"
import movieDB from "../api/moviesApi"
import { Movie, MoviesResponse } from '../interfaces/movieDb';

interface MoviesState {
    nowInTheaters:Movie[]
    popularMovies:Movie[]
    topRated:Movie[]
    upcoming:Movie[]
}

export const useMovies = () => {
    const [isLoading, setisLoading] = useState(true)
    const [moviesState,setMoviesState] = useState<MoviesState>({
        nowInTheaters:[],
        popularMovies:[],
        topRated:[],
        upcoming:[],
    })
    

    const getData = async() =>{
        const nowInTheatersPromise =movieDB.get <MoviesResponse> ('/now_playing')
        const popularPromise =movieDB.get <MoviesResponse> ('/popular')
        const topPromise =movieDB.get <MoviesResponse> ('/top_rated')
        const upcomingPromise =movieDB.get <MoviesResponse> ('/upcoming')
        
        const res = await Promise.all([nowInTheatersPromise,popularPromise,topPromise,upcomingPromise])

        setMoviesState({
            nowInTheaters:res[0].data.results,
            popularMovies:res[1].data.results,
            topRated:res[2].data.results,
            upcoming:res[3].data.results
        })

        setisLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return{
        ...moviesState ,isLoading
    }

}