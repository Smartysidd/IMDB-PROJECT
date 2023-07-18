import React, { useEffect,useState } from 'react';
import axios from 'axios'
import Pagination from "./Pagination";
function Movies() {

    const [movies , setMovies] = useState([])
    const [pageNum , setpageNum]= useState(1)
    const [watchList, setWatchList] = useState([])
    const [hovered , setHovered]=useState('')


//Pagination Handlers


    const onNext=()=>{
setpageNum(pageNum+1)
};

    const onPrev=()=>{
if(pageNum>1){
    setpageNum(pageNum-1)
}  
  };
                  //watchlist Handlers

                  const addToWatchList=(movie)=>{
                         const newWatchList=[...watchList,movie]
                         setWatchList(newWatchList);
                         localStorage.setItem('imdb',JSON.stringfy(watchList))
                  };
                         const removeFromWatchList = (movie) => {
                         const filteredWatchList=watchList.filter((m)=>{
                            return (m.id!=movie.id);
                         });
                         setWatchList( filteredWatchList);
                         localStorage.setItem('imdb',JSON.stringify('watchlist'))
                        };
//Hovering on Movie cards//

                        const showButton=(id)=>{
                            setHovered(id)
                        }

                        const hideButton=(id)=>{
                            setHovered('')
                        }
                         console.log(watchList)
                    
                  

    useEffect(() => {
        (function(){  
            let moviesfromLS=localStorage.getItem('imdb')
            moviesfromLS=JSON.parse(moviesfromLS) || []
            setWatchList(moviesfromLS)

            axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=2517cafdf89d5164a6df39d10b62ab27&page=${pageNum}`).then((res) => {
            setMovies(res.data.results);
        });
    })();
      
    },[pageNum])
// console.log(pageNum)
    // console.log(movies)
    return (
        <div>
            <div className='text-2xl mb-8 font-bold text-center'>
                Trending Movies
            </div>
            <div className="flex flex-wrap">
{
    movies.map((movie)=>{
        return ( <div 
            onMouseOver={()=>showButton(movie.id)}
            onMouseLeave={()=>hideButton()}
            key={movie.id}  
        className="w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[200px] hover:scale-110 duration-300 relative flex-items-end" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
        }}>


<div className="text-2xl p-2 bg-gray=900 rounded-2xl absolute right-2 top-2 "
style={{display:hovered==movie.id ? 'block' : 'none'}}> 
             {
                watchList.includes(movie)==false ?(
                
<div onClick={()=>addToWatchList(movie)}>😊</div>)  
:(
    <div onClick={()=>removeFromWatchList(movie)}>❌</div>
    
)
    }
</div>

            <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
                {/* John Wick */}
                {movie.title}
            </div>
        </div>
        );
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
            <Pagination pageNumProp={pageNum} onNextProp={onNext} onPrevProp={onPrev}></Pagination>
        </div>
      
    );
            }

export default Movies;