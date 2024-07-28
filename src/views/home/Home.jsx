import React from 'react';
import studio from "/images/studio.jpg";
// import fine_line from "/images/fine_line.jpeg";
// import removal from "/images/removal.jpg";
// import piercing from "/images/piercing.jpg";
// import artists from "/images/artists.jpg";
import '../../styles/tailwind.css'

export const Home = () => {
  return (
    <div className="flex flex-col items-center w-full"> {/* Ensure everything in home is flex and centered */}
      <h1 className="text-center text-3xl font-bold mt-6 mb-6">Noble Art Studios</h1>
      <img src={studio} className="w-3/4 max-w-7xl h-auto mx-auto" alt="Studio"/> {/* width set to 3/4 */}
      <h2 className="text-center text-2xl font-semibold mt-4 mb-4">Much more than a tattoo studio</h2>
      <div className="flex justify-center w-full space-x-4">
        <div className='flex flex-col items-center gap-12 w-1/2'>
          {/* <img src={fine_line} className='w-3/4 h-auto' alt="Fine Line"/> */}
          {/* <img src={piercing} className='w-3/4 h-auto' alt="Piercing"/>  */}
        </div>
        <div className='flex flex-col items-center gap-12 w-1/2'> {/* Center items in column */}
          {/* <img src={removal} className='w-3/4 h-auto' alt="Removal"/> {/* width set to 3/4 */}
          {/* <img src={artists} className='w-3/4 h-auto' alt="Artists"/>  */}
        </div>
      </div>
      <h2 className="text-center text-2xl font-semibold mt-4 mb-6">It's not a tattoo, it's art on your skin</h2>
    </div>
  )
}