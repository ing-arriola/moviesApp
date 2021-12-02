import { useState, useEffect } from 'react';
import movieDB from '../api/moviesApi';
import { MovieFull } from '../interfaces/movieDb';
interface MovieDetails {
    isLoading:boolean;
    cast:any[]
}

export const useMovieDetails = (movieId:number) =>{
    const [state, setstate] = useState <MovieDetails> ()

    const getMovieDetail =  async () =>{
        const res = await movieDB.get <MovieFull> (`/${movieId}`)
        
        console.log(res.data.overview)
    }

    useEffect(() => {
        getMovieDetail()
    }, [])

    return {
        state
    }

}