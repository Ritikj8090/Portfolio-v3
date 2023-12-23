import Image from 'next/image'
import React from 'react'
import light_theme from '@/public/svg/light_theme.svg'

const page = () => {
  return (
    <div>
        page
        <Image src={light_theme} alt='d'/>
    </div>
  )
}

export default page