import Headphone from '../assets/images/headphoneImage.png'
import discountFirst from '../assets/images/discountFirst.png'
import Button from './Button'
import Earbud from '../assets/images/Earbuds.png'
import DiscountSecond from '../assets/images/DiscountSecond.png'
import Airpod from '../assets/images/Airpods.png'
import FlashDrive from '../assets/images/FlashDrive.png'

const Featured = () => {
  return (
    <>
    <div className=" h-[100%] md:pl-[1rem] bg-black pt-[30px]">
        <div className=" p-0 lg:pl-[1rem] pr-[2rem] flex items-center justify-between">
       <p className=" text-[30px] md:text-[40px] text-[white]"> Featured Discount</p>
        <p className="flex items-center text-sm text-green-600">View all discounts <i className="bx bx-right-arrow-alt "> </i></p>
         </div>
    <div className='flex flex-col md:flex-row items-center gap-4'>
         <section className='flex-row gap-3'>
          <div className='w-full md:w-[20rem] h-[30rem] bg-[#e5e5e5]  pb-8 rounded-xl relative text-center md:flex-col hover:scale-105;'>
            <img src ={Headphone} alt ="Headphone"/ >
            <img className='absolute top-0 left-0 mt-[20px] ml-5 animate-pulse w-16 h-16' src ={discountFirst} alt="discount" />
            <p className='text-[25px] font-bold'>Nuraphone</p>
            <p className='mb-5'>
            <span className='text-[gray] line-through'>$399</span> 
            <span className='font-bold text-[1rem]'>$299.25</span>
            </p>
            <Button
             text = {"SHOP NOW"}
             className='text-white bg-[blue] rounded-full p-[7px] text-[17px] w-[150px] '
            
            />
          


             
          </div>

         </section>
         <section className='flex-row gap-3'>
          <div className='w-full md:w-[20rem] h-[30rem] bg-[#e5e5e5]  pb-8 rounded-xl relative text-center md:flex-col hover:scale-105;'>
            <img src ={Earbud} alt ="Earbud"/ >
            <img className='absolute top-0 left-0 mt-[20px] ml-5 animate-pulse w-16 h-16' src ={DiscountSecond} alt="discount" />
            <p className='text-[25px] font-bold'>Nuratrue</p>
            <p className='mb-5'>
            <span className='text-[gray] line-through'>$199.99</span> 
            <span className='font-bold text-[1rem]'>$139.99</span>
            </p>
            <Button
             text = {"SHOP NOW"}
             className='text-white bg-[blue] rounded-full p-[7px] text-[17px] w-[150px] '
            
            />
          


             
          </div>

         </section>
         <section className='flex-row gap-3'>
          <div className='w-full md:w-[20rem] h-[30rem] bg-[#e5e5e5]  pb-8 rounded-xl relative text-center md:flex-col hover:scale-105;'>
            <img src ={Airpod} alt ="Headphone"/ >
            <img className='absolute top-0 left-0 mt-[20px] ml-5 animate-pulse w-16 h-16' src ={discountFirst} alt="discount" />
            <p className='text-[25px] font-bold'>NuraBuds 2</p>
            <p className='mb-5'>
            <span className='text-[gray] line-through'>$119</span> 
            <span className='font-bold text-[1rem]'>$88.25</span>
            </p>
            <Button
             text = {"SHOP NOW"}
             className='text-white bg-[blue] rounded-full p-[7px] text-[17px] w-[150px] '
            
            />
          


             
          </div>

         </section>
         <section className='flex-row gap-3'>
          <div className='w-full md:w-[20rem] h-[30rem] bg-[#e5e5e5]  pb-8 rounded-xl relative text-center md:flex-col hover:scale-105;'>
            <img src ={FlashDrive} alt ="Headphone"/ >
            <img className='absolute top-0 left-0 mt-[20px] ml-5 animate-pulse w-16 h-16' src ={discountFirst} alt="discount" />   
            <p className='text-[17.95px] font-bold'>Nura Bluetooth 5.3 Audio Transmitter</p>         
            <p className='mb-5'>
            <span className='text-[gray] line-through'>$399</span> 
            <span className='font-bold text-[1rem]'>$299.25</span>
            </p>
            <Button
             text = {"SHOP NOW"}
             className='text-white bg-[blue] rounded-full p-[7px] text-[17px] w-[150px] '
            
            />
          


             
          </div>

         </section>
        </div>
         
         
         

         </div>
    
    
    </>
  )
}

export default Featured