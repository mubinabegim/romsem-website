import React from 'react'
import Sidebar from '../../components/Sidebar'
import ThirdCol from '../main_page/ThirdCol'
import GoodsCards from './GoodsCards'


export default function Goods() {
  return (
    <div className='flex'>
      <Sidebar />
      <GoodsCards/>
      <ThirdCol />
    </div>
  )
}