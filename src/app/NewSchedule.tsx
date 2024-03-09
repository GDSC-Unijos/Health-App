import { useNavigate } from 'react-router';
import singleIcon from '../images/single.svg';
import recurringIcon from '../images/recurring.svg';

export default function NewSched () {
  const history = useNavigate();

  return(
    <>
      <section className='text-center my-6'>
        <h1 className="text-[#263A5C] font-pops mb-[7rem] font-bold">Schedule an Appointment</h1>
        <div className="flex w-[75%] mx-auto justify-between">
          <article onClick={()=>history('../single-schedule')} className="bg-[#F4FFF3] items-center flex flex-col rounded-sm p-4 gap-2 cursor-pointer">
            <img className='w-[50px] h-[50px]' src={singleIcon} alt="Single" />
            <p className='text-sm'>Single Task</p>
          </article>
          <article onClick={()=>history('../recurring1/')} className="bg-[#F4FFF3] items-center flex flex-col rounded-sm p-4 gap-2 cursor-pointer">
            <img className='w-[50px] h-[50px]' src={recurringIcon} alt="Recurring" />
            <p className='text-sm'>Recurring Task</p>
          </article>
        </div>
      </section>
    </>
  )
}