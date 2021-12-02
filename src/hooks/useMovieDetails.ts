import { useState, useEffect } from 'react';
import movieDB from '../api/moviesApi';
import { CreditsResponse, Cast } from '../interfaces/credits';
import { MovieFull, Movie, MoviesResponse } from '../interfaces/movieDb';
interface MovieDetails {
    isLoading:boolean;
    movieFull?:MovieFull;
    cast:Cast[]
}

export const useMovieDetails = (movieId:number) =>{
    const [state, setstate] = useState <MovieDetails> (
        {
            isLoading:true,
            movieFull:undefined,
            cast:[]
        }
    )

    const getMovieDetail =  async () =>{
        const MovieDetailsPromise = movieDB.get <MovieFull> (`/${movieId}`)
        const castPromise = movieDB.get<CreditsResponse> (`/${movieId}/credits`)
        const [MovieFullRes,CastRes] =  await Promise.all([MovieDetailsPromise,castPromise])

        setstate({
            isLoading:false,
            movieFull:MovieFullRes.data,
            cast:CastRes.data.cast
        })
    }

    useEffect(() => {
        getMovieDetail()
    }, [])

    return {
        ...state
    }

}