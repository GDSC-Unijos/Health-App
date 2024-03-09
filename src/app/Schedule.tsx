import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';
import { useNavigate } from 'react-router';

export default function Settings() {
  const history = useNavigate();

  return (
    <div>
      <div className="flex w-full mt-10 md:justify-between">
        <section className='hidden md:block w-[77%] md:px-4'>
          <h2 className="text-[#263A5C] font-semibold date text-center">17/07/2023</h2>
          <div className="notification-preview flex justify-between items-center font-pops w-full p-2 my-3 shadow-md text-sm">
            <div className="flex flex-col">
              <p className="notification-message text-[#464E5F]">Appointment with Tosin Poppins </p>
              <span className='text-[#A1A4AA]'>2:00pm</span>
            </div>
            <GrCheckbox className='cursor-pointer' size={25}/>
            {/* <GrCheckboxSelected/> */}
          </div>
          <div className="notification-preview flex justify-between items-center font-pops w-full p-2 my-3 shadow-md text-sm">
            <div className="flex flex-col">
              <p className="notification-message text-[#464E5F]">Medication for today</p>
              <span className='text-[#A1A4AA]'>2:00pm</span>
            </div>
            {/* <GrCheckbox size={25}/> */}
            <GrCheckboxSelected className='cursor-pointer' size={25}/>
          </div>
        </section>
        <div className="centerLine w-0 bg-[#6C6C6C] md:w-[.1%]"></div>
        <div className="calendarWrap w-full h-100vh md:px-2 md:flex md:flex-col md:justify-between md:w-[22.8%] md:items-center md:gap-[14rem]" >
          <Calendar className='bg-white mx-auto text-center font-normal text-sm text-[#B3B3B3]' />
          <div className="divideLine w-full bg-[#6C6C6C] h-[1px] my-4 md:hidden"></div>
          <aside className="missedApp hidden font-normal text-sm md:flex flex-col font-pops">
            <button onClick={()=> history('new-schedule')} className='bg-[#263A5C] rounded-lg text-white p-3'>Create a new Schedule</button>
            <Link to="new-schedule" className='text-xs text-center'>Create a new Schedule and Monitor</Link>
          </aside>
        </div>
      </div>
      <section className='md:hidden'>
        <h2 className="text-[#263A5C] font-semibold date text-center">17/07/2023</h2>
        <div className="notification-preview flex justify-between items-center font-pops w-full p-2 my-3 shadow-md text-sm">
          <div className="flex flex-col">
            <p className="notification-message text-[#464E5F]">Appointment with Tosin Poppins </p>
            <span className='text-[#A1A4AA]'>2:00pm</span>
          </div>
          <GrCheckbox className='cursor-pointer' size={25}/>
          {/* <GrCheckboxSelected/> */}
        </div>
        <div className="notification-preview flex justify-between items-center font-pops w-full p-2 my-3 shadow-md text-sm">
          <div className="flex flex-col">
            <p className="notification-message text-[#464E5F]">Medication for today</p>
            <span className='text-[#A1A4AA]'>2:00pm</span>
          </div>
          {/* <GrCheckbox size={25}/> */}
          <GrCheckboxSelected className='cursor-pointer' size={25}/>
        </div>
      </section>
      <aside className="missedApp flex w-3/4 font-normal text-sm mx-auto flex-col font-pops md:hidden">
        <button onClick={()=> history('new-schedule')} className='bg-[#263A5C] rounded-lg text-white p-3 my-2'>Create a new Schedule</button>
        <Link to="new-schedule" className='text-xs text-center'>Create a new Schedule and Monitor</Link>
      </aside>
    </div>
  )
}