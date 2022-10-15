import React from 'react'
import Sidebar from '../../components/Sidebar'
import GoodsMain from './GoodsMain'
import ThirdCol from '../main_page/ThirdCol'


export default function Goods() {
  return (
    <div className='flex'>
      <Sidebar />
      <GoodsMain/>
      <ThirdCol />
    </div>
  )
}
