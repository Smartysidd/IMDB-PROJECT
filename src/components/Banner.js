import React from 'react'
function Banner(){
    return(
        <div className='h-[20vh] md:h-[60vh] bg-center bg-no-repeat flex items-end'
        style={{
            backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_5BWwYPV6VhploQjsDPMNH_JVHgG-W7QUA&usqp=CAU)'
        }}>
            <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white text-center w-full'>
                John Wick
            </div>
         
        </div>
        
        )
}
export default Banner