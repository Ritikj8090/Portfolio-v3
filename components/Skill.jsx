import React from 'react'
import Image from 'next/image';
import { backend, frontend, other } from '../constant/index';
import StarsCanvas from './StarBackground';

const Skill = () => {
  return (
    <div id='skill' className='h-full w-full px-3 md:px-20 xl:px-72 pt-20 relative'>
     
      <div className='flex justify-center items-center text-2xl md:text-4xl pb-16'>
        My Skillsets
      </div>
      <hr className='p-2'/>
      <div  className=' flex justify-center gap-2 flex-wrap '>
      <div className='glass w-[400px] min:w-[300px] p-2 rounded-lg h-fit'>
        <h1 className='flex justify-center items-center mb-5 p-2 rounded-lg text-xl md:text-2xl'>Front-End</h1>
        <hr />
        <div className='flex gap-5 flex-wrap  p-2  rounded-lg'>
          {
            frontend.map((skill) => {
              return (
                <div key={skill.number}>
                  <div className='flex gap-1 items-center justify-center'>
                    <Image src={skill.path} alt='' className={`w-[20px] h-[20px] md:w-[40px] md:h-[40px]`}  />
                    <div className='text-xl lg:text-2xl'>{skill.name}</div>
                  </div></div>
              )
            })
          }
        </div>
      </div>
      <div className='glass w-[400px] min:w-[300px] p-2 rounded-lg h-fit'>
        <h1 className='flex justify-center items-center mb-5 p-2 rounded-lg text-xl md:text-2xl'>Back-End</h1>
        <hr />
        <div className='flex gap-5 flex-wrap  p-2 rounded-lg'>

          {
            backend.map((skill) => {
              return (
                <div key={skill.number}>
                  <div className='flex gap-1 items-center justify-center'>
                    <Image src={skill.path} alt='' className={`w-[20px] h-[20px] md:w-[40px] md:h-[40px]`} />
                    <div className='text-xl lg:text-2xl'>{skill.name}</div>
                  </div></div>
              )
            })
          }


        </div>
      </div>
      <div className='glass w-[400px] min:w-[300px] p-2 rounded-lg h-fit'>
        <h1 className='flex justify-center items-center mb-5 p-2 rounded-lg text-xl md:text-2xl'>Other</h1>
        <hr />
        <div className='flex gap-5 flex-wrap  p-2 rounded-lg'>

          {
            other.map((skill) => {
              return (
                <div key={skill.number}>
                  <div className='flex gap-1 items-center justify-center'>
                    <Image src={skill.path} alt='' className={`w-[20px] h-[20px] md:w-[40px] md:h-[40px]`} />
                    <div className='text-xl lg:text-2xl'>{skill.name}</div>
                  </div></div>
              )
            })
          }


        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Skill