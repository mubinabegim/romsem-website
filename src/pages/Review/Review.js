import React from 'react'
import {Link} from 'react-dom'
import Sidebar from '../../components/Sidebar'
import ThirdCol from '../main_page/ThirdCol'
import ReviewMain from './ReviewMain'


export default function Goods() {
  return (
    <div className='flex'>
      <Sidebar />
      <ReviewMain/>
      <ThirdCol />
    </div>
  )
}