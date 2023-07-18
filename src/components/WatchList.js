import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

function WatchList() {
    const [favourites , setfavourites]=useState([])
    const[genres,setGenres]=useState([])

    let genreids = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-Fi",
        10770: "TV",
        53: "Thriller",
        10752: "War",
        37: "Western",
      };
                                                         //we are adding movies from local storage in our watchlist//
    useEffect(()=>{
        let moviesfromlocalStorage=localStorage.getItem('imdb')
        moviesfromlocalStorage= JSON.parse(moviesfromlocalStorage)
        setfavourites(moviesfromlocalStorage)},[])

 useEffect(()=>{
    let temp=movies.map((movie)=>genreids[movie.genre_ids[0]])
    setGenre(["All Genres",...temp])
 },favourites)

 


     return(

<>
<div className="mt-6 flex space-x-2 justify-center">
    {genres.map((genre)=>{
        return<div>{genre}</div>
    })}

</div>

        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead class='bg-gray-50'>
                    <tr>
                        <th class="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th>
                            <div className='flex'>
                                <div>Ratings</div>
                            </div>
                        </th>
                        <th>
                            <div className='flex'>
                                <div>Popularity</div>
                            </div>
                        </th>
                        <th>
                            <div className='flex'>
                                <div>Genre</div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody claas="divide-y divide-gray-100 border-t border-gray-100">
                    {favourites.map((movie)=>{
                <tr class="hover:bg-gray-50">
                  <td class="flex items-center px-6 py-4 font-normal text-gray-900">
                      <img src="h-[6rem] w-[10rem] object-fit"></img>
                     <div class="font-medium text-gray-700 text-sm">{movie.title}</div>
                         </td>
                         <td className="pl-6 py-4">
                          {movie.vote_average}
                         </td>

                         <td className="pl-6 py-4">
                         {movie.popularity}
                         </td>

                         <td className="py-4">
                          Action
                         </td>
                              </tr>
                    
})}
                </tbody>
            </table>
        </div>

        </>
    );
}
export default WatchList