import Button from "./Button"

const Subscription = () => {
  return (
    <div className="bg-sub-bg  bg-cover pl-[1rem] pt-[10rem] text-center ">
        <p className="text-[white] text-[4rem]"> a sound subscription</p>
        <p className="text-[white] mt-10 text-[30px]">Experience personalised sound across our devices on a <br className="block"></br>low monthly fee with NuraNow. Cancel Anytime</p>
        <Button 
             text={"DISCOVER NURANOW"}
             className={
               " bg-[#3333F5] text-[white] border rounded-full p-4 mt-[4rem] mb-[3rem]  "
             }
             />
             </div>
    
  )
}

export default Subscription