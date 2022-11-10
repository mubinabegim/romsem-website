import React from 'react'
import Sidebar from '../../components/Sidebar'
import SecondCol from '../../pages/main_page/SecondCol/SecondCol'
import ThirdCol from './ThirdCol'


export default function MainPage({meals}) {
  return (
    <>
    <div className='sm:flex hidden'>
      <Sidebar />
      <SecondCol meals={meals} className="w-[100%]"/>
      <ThirdCol />
    </div>
   
    </>
  )
}
