import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div className='flex itmes-center w-full p-6 bg-tele-primary z-50'><Logo/>
    <div className='md:ml-auto w-3/4 justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground'>
        <Button variant="ghost" size="sm">
            Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
           Terms & Condition
        </Button>
    </div>
    </div>
  )
}

export default Footer
