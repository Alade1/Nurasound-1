import Button from "./Button";
import logo from "../assets/images/logo.png"; 

const Header = () => {
    return (
      <div>
  <>
      <div className= "w-[100%] h-[100%] bg-hero-bg text-[white]">
          <header className='flex items-center justify-between py-5'>
              <nav className='flex items-center gap-[5rem]'>
                <img className='pl-[2rem]' src ={logo}  /> 
                <ul className=' hidden md:flex items-center gap-9'>
                <li>Products</li>
                <li>Subscription</li>
                <li>Why Nura?</li>
                <li>Support</li>
                </ul>
              </nav>
            <span className='px-[50px] cursor-pointer'> Cart (0)</span>
  
           
  
          </header>
          <div className=' flex flex-col gap-8 mt-[28%] text-center'>
              <p className='text-[25px]'> OUR BIGGEST SALE NOW LIVE</p>
              <h1 className='text-[50px] mb-5'>Black Friday Starts Now!</h1>
             </div>
             <div className='flex items-center justify-center'>
             <Button 
             text={"SHOP SALES NOW"}
             className={
               " bg-white rounded-full text-black w-[200px] p-[8px] animate-bounce cursor-pointer "
             }
             />
             </div>
  
  
             
  
  
      </div>
      
      
      </>
  
      </div>
    )
  }
  
  export default Header