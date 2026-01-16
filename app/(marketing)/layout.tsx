import React from 'react'
import NavBar from './_component/NavBar'


const Marketinglayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full'>
        <NavBar/>
        <main className='h-full pt-40'>
            {children}
        </main>
    </div>
  )
}

export default Marketinglayout