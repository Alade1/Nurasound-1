import phone from '../assets/images/Phone.png'
import Button from './Button'
const Hearing = () => {
  return (
    <div className=" pl-[1rem] mt-[40px] bg-gradient-to-r from-blue-700 to-[#3280f4] h-[51rem] flex justify-start gap-[15rem]">
     <section className='z-50  pl-[1rem]'>
        <img src={phone} alt="phone" className='w-[70rem] h-[60rem] z-50'/>
     </section>
     <section className='mt-[12rem] '>
        <p className='w-[50%] text-[3.5rem] text-[white]'>For your ears only.</p>
        <p className='w-[70%] text-[white] text-[1.2rem] pt-5'>
            Normal hearing varies significantly from person to person, and these variations make a <span className='text-[#7DFB5D]'>big difference </span> on how you experience music.
        </p>
        <p className='text-[white] w-[70%] pt-5 text-[1.2rem]'>
            The first time you use Nura ear buds, they <span className='text-[#7DFB5D]'> measure your earing </span> to create your personalised hearing profile
        </p>
        <Button 
             text={"LEARN MORE"}
             className={
               "text-white p-2 cursor-pointer border marker:border-white rounded-full mt-4 "
             }
             />

        

     </section>

    </div>
  )
}

export default Hearing