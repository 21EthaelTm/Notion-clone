'use client'
import React from 'react'
import UseScrollHook from '@/Hook/useScrollHook'
import {cn} from '@/lib/utils'
import Logo from './Logo'
import { ModeToggle } from '@/app/ModeTogle'


const NavBar = () => {
  const scrolled = UseScrollHook()
  return (
    <div className={cn("flex items-center p-5 top-0 z-50 fixed bg-background dark:bg-[#1f1f1f] w-full text-tele-primary ",scrolled && "border-b border-tele-primary shadow-sm")}><Logo/>
    <div className='md:ml-auto md:flex-end  justify-between items-center'>Login <ModeToggle/></div>
    </div>
  )
}

export default NavBar