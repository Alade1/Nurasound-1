import Chicken from "../assets/images/chicken.png";

const Device = () => {
  return (
    <div className="pl-[1rem] pt-[2.5rem] bg-[#171717] h-[80%] relative overflow-x-hidden">
        <img src={Chicken} alt="Chicken" className="w-[30rem] m-auto" />
    <section className="absolute left-[50rem] top-[9rem]">
        <p className="text-[white] text-[2.5rem] w-[40%]">Play from any device</p>
        <p className="text-[white] text-[1.5rem] w-[70%] mt-4">Your hearing profile is <span className="text-[#7DFB5D]">stored on the earbuds </span>, and it is to whatever you listen to, <span className="text-[#7DF85D]">on any device.</span></p>
        <p className="text-[white] text-[1.5rem] mt-4 w-[70%] ">Use Nura app to create hearing profile, configure touch buttons, adjust immersion mode and more</p>

    </section>





    </div>
  )
}

export default Device