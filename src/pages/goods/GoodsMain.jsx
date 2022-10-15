import React from 'react';
import setiGoods from '../../images/desktop/desktop-goods/goodsSeti.png'
import img1 from '../../images/desktop/desktop-goods/img1.png'
import img2 from '../../images/desktop/desktop-goods/2.png'
import img3 from '../../images/desktop/desktop-goods/3.png'
import img4 from '../../images/desktop/desktop-goods/4.png'
import img5 from '../../images/desktop/desktop-goods/5.png'
import img6 from '../../images/desktop/desktop-goods/6.png'
import img7 from '../../images/desktop/desktop-goods/7.png'
import img8 from '../../images/desktop/desktop-goods/10.png'
import img9 from '../../images/desktop/desktop-goods/9.png'
import Button from '../../components/Button'
import Text from '../../pages/main_page/Text'



const GoodsMain = () => {
   return (
      <div className='w-[65%] mx-auto bg-gray'>
         <div className='w-[85%] mx-auto pb-14'>
            <div className='flex gap-3 items-center py-5'>
               <img src={setiGoods} alt="settings" />
               <p className='lg:text-2xl text-lg font-medium'>Сеты</p>
            </div>
            <div className='flex flex-wrap gap-y-5 justify-between'>
               <div className='bg-white p-2 w-[31%]'>
                  <img src={img1} alt="meal" />
                  <p className='2xl:text-2xl text-base font-medium pt-3'>Филадельфия и лосось сет</p>
                  <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>1260 грамм, 36 кусочков</p>
                  <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                     <p className='2xl:text-2xl text-lg font-bold'>1150 СОМ</p>
                     <Button classes={"py-1 2xl:px-10 px-6"} />
                  </div>
               </div>
               <div className='bg-white p-2 w-[31%]'>
                  <img src={img2} alt="meal" />
                  <p className='2xl:text-2xl text-base font-medium pt-3'>Сет "5 Филадельфий"</p>
                  <p className='2xl:text-lg text-xs text-gray-400 pt-7 pb-3'>1260 грамм, 36 кусочков</p>
                  <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                     <p className='2xl:text-2xl text-lg font-bold'>1499 СОМ</p>
                     <Button classes={"py-1 2xl:px-10 px-6"} />
                  </div>
               </div>
               <div className='bg-white p-2 w-[31%]'>
                  <img src={img3} alt="meal" />
                  <p className='2xl:text-2xl text-base font-medium pt-3'>Филадельфия и лосось сет</p>
                  <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>1260 грамм, 36 кусочков</p>
                  <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                     <p className='2xl:text-2xl text-lg font-bold'>1499 СОМ</p>
                     <Button classes={"py-1 2xl:px-10 px-6"} />
                  </div>
               </div>
               <div className='bg-white p-2 w-[31%]'>
                  <img src={img4} alt="meal" />
                  <p className='2xl:text-2xl text-base font-medium pt-3'>Сет "6 Филадельфий"</p>
                  <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>1260 грамм, 36 кусочков</p>
                  <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                     <p className='2xl:text-2xl text-lg font-bold'>1559 СОМ</p>
                     <Button classes={"py-1 2xl:px-10 px-6"} />
                  </div>
               </div>
               <div className='bg-white p-2 w-[31%]'>
                  <img src={img5} alt="meal" />
                  <p className='2xl:text-2xl text-base font-medium pt-3'>Топовый сет</p>
                  <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>1260 грамм, 36 кусочков</p>
                  <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                     <p className='2xl:text-2xl text-lg font-bold'>1519 СОМ</p>
                     <Button classes={"py-1 2xl:px-10 px-6"} />
                  </div>
               </div>
               <div className='bg-white p-2 w-[31%]'>
                  <img src={img6} alt="meal" />
                  <p className='2xl:text-2xl text-base font-medium pt-3'>Камикадзе сет</p>
                  <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>1260 грамм, 36 кусочков</p>
                  <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                     <p className='2xl:text-2xl text-lg font-bold'>1469 СОМ</p>
                     <Button classes={"py-1 2xl:px-10 px-6"} />
                  </div>
               </div>
               <div className='bg-white p-2 w-[31%]'>
                  <img src={img8} alt="meal" />
                  <p className='2xl:text-2xl text-base font-medium pt-3'>Сет "4 Филадельфии"</p>
                  <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>1260 грамм, 36 кусочков</p>
                  <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                     <p className='2xl:text-2xl text-lg font-bold'>1559 СОМ</p>
                     <Button classes={"py-1 2xl:px-10 px-6"} />
                  </div>
               </div>
               <div className='bg-white p-2 w-[31%]'>
                  <img src={img9} alt="meal" />
                  <p className='2xl:text-2xl text-base font-medium pt-3'>Филадельфия LOVE сет</p>
                  <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>1260 грамм, 36 кусочков</p>
                  <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                     <p className='2xl:text-2xl text-lg font-bold'>1479 СОМ</p>
                     <Button classes={"py-1 2xl:px-10 px-6"} />
                  </div>
               </div>
               <div className='bg-white p-2 w-[31%]'>
                  <img src={img7} alt="meal" />
                  <p className='2xl:text-2xl text-base font-medium pt-3'>Якудза сет</p>
                  <p className='2xl:text-lg text-xs text-gray-400 pt-1 pb-3'>1260 грамм, 36 кусочков</p>
                  <div className='flex gap-2 justify-between items-center border-t-2 py-2'>
                     <p className='2xl:text-2xl text-lg font-bold'>1499 СОМ</p>
                     <Button classes={"py-1 2xl:px-10 px-6"} />
                  </div>
               </div>
            </div>
         </div>
         <Text/>
      </div>
   );
}

export default GoodsMain;
