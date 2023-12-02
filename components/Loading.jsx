"use client"
import React, { useEffect, useState } from 'react'
import StarsCanvas from './StarBackground'

const Loading = () => {
    const [count, setCount] = useState(0)
    const [first, setFirst] = useState(true)

    const bar = () => {
        for(let i=0;i<=100;i++){
            setTimeout(() => {
                setCount(i)
            },i*50)
        }
    }

    useEffect(() => {
        if(first)
            bar()
        setFirst(false)
    })
  return (
    <div className={`h-screen w-full flex flex-col items-center justify-center fixed z-[100] bg-black ease-in-out duration-100`}>
        <StarsCanvas />
        <div className='md:w-[400px] w-[200px]'>Loading...</div>
        <div className='bg-[#333] skew-x-[30deg] md:w-[400px] w-[200px] md:h-[40px] h-[30px]'>
            <div className={`h-full bg-yellow-400`} style={{width:count + '%'}}>
                <span className='text-black md:text-2xl text-xl font-bold skew-x-[-30deg] flex items-center left-5 top-1 absolute'>{count}%</span>
            </div>
        </div>
    </div>
  )
}

export default Loading