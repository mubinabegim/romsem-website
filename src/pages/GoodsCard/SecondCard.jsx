import React from 'react';
import img1 from '../../images/desktop/desktop-goods-card/img2.png'
import smallPlus from '../../images/desktop/desktop-goods-card/smallPlus.png'


const FirstCard = () => {
   return (
      <div className='w-[70%] text-center'>
         <img className='' src={img1} alt="meal" />
         <p className='2xl:text-base text-xs font-medium pt-1'>Филадельфия</p>
         <div className='flex gap-2 justify-center items-center mt-1'>
            <p className='2xl:text-2xl text-base font-bold'>170 СОМ</p>
            <img className='w-[12%]' src={smallPlus} alt="plus" />
         </div>
      </div>
   );
}

export default FirstCard;