import React, { useEffect,useState } from 'react';
import axios from 'axios'
function Movies() {

    const [movies , setMovies] = useState([])
    useEffect(() => {
        (function(){  axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=2517cafdf89d5164a6df39d10b62ab27`).then((res) => {
            setMovies(res.data.results);
        });
    })()
      
    },[])

    console.log(movies)
    return (
        <div>
            <div className='text-2xl mb-8 font-bold text-center'>
                Trending Movies
            </div>
            <div className="flex flex-wrap">
{
    movies.map((movie)=>{
        return  <div className="w-[200px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[200px] hover:scale-110 duration-300 relative flex-items-end" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
        }}>
            <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-50">
                {/* John Wick */}
                {movie.title}
            </div>
        </div>
    })
}
                {/* <div className="w-[200px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[200px] hover:scale-110 duration-300 relative flex-items-end" style={{
                    backgroundImage: `url(https://m.media-amazon.com/images/I/61sfGQJJcrL._AC_UL480_FMwebp_QL65_.jpg)`
                }}>
                    <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-50">
                        John Wick
                    </div>
                </div> */}
                {/* <div className="w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300 relative flex-items-end" style={{
                backgroundImage:`url(https://m.media-amazon.com/images/I/61sfGQJJcrL._AC_UL480_FMwebp_QL65_.jpg)`}}>

                </div> */} 
            </div>
        </div>
    );
}
export default Movies