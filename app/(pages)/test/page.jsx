import Image from 'next/image'
import React from 'react'
import light_theme from '@/public/svg/light_theme.svg'
import os from 'os';
const page = () => {
  const O = os.hostname()
  return (
    <div className=' h-screen w-full items-center justify-center flex'>
        <span>TESTING SITE🙂</span>
    </div>
  )
}

export default page

/*<Image src={light_theme} alt='d'/> */