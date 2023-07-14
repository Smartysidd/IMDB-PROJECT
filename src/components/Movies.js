import React from 'react'
function Movies()
{
    return (
        <div>
            <div className='text-2xl mb-8 font-bold text-center'>
                Trending Movies
            </div>
            <div className="flex">
               <div className="w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300 relative flex-items-end" style={{
                backgroundImage:`url(https://m.media-amazon.com/images/I/61sfGQJJcrL._AC_UL480_FMwebp_QL65_.jpg)`}}>

                </div>
                <div className="w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300 relative flex-items-end" style={{
                backgroundImage:`url(https://m.media-amazon.com/images/I/61sfGQJJcrL._AC_UL480_FMwebp_QL65_.jpg)`}}>

                </div>
            </div>
        </div>
    );
}
export default Movies