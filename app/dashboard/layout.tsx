import React from 'react'
import Sidebar from "@/app/UI/dashboard/sidebar/Sidebar"
import Navbar from "@/app/UI/dashboard/navbar/Navbar"
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <div>{children}</div>
    </>
  )
}

export default layout