import { useEffect, useState } from "react"
import movieDB from "../api/moviesApi"
import { Movie, NowPlaying } from "../interfaces/movieDb"

export const useMovies = () => {
    const [isLoading, setisLoading] = useState(true)
    const [nowInTheaters, setnowInTheaters] = useState<Movie[]>([])

    const getData = async() =>{
        const res= await movieDB.get <NowPlaying> ('/now_playing')
        setnowInTheaters(res.data.results)
        setisLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return{
        nowInTheaters,isLoading
    }

}