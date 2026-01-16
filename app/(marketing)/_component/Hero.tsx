import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    // <section className='flex  items-center justify-center max-w-xl'>
      <div className='flex  justify-center items-center  min-w-[50%]'  >
        <div className='relative  w-[250px] h-[250px] hidden sm:block '>
      <Image src="/girlimage.png" alt='hero image' fill
         className='object-fit object-right'></Image>
         
         </div>
         <div className='relative   w-[250px] h-[250px]  '>
      <Image src="/manpaper.png" alt='hero image' fill
         className='object-fit object-left'></Image>
         </div>

          </div>
    // </section>
  )
}

export default Hero