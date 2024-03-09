import scheduleIcon from '../images/schedule.svg'
import activityIcon from '../images/activity.svg'
import emergencyIcon from '../images/emergencyHome.svg'
import notifyIcon from '../images/ri_notification-4-line.svg'
import chatIcon from '../images/chat.svg'
import { useNavigate } from 'react-router';
import Barchart from './components/Barchart';

export default function Settings() {
  const history = useNavigate();

  return (
    <div>
      <header className='hidden md:block'>
        <nav className="topHeader flex justify-between items-center my-10">
          <h1 className='text-2xl text-[#263A5C] font-bold'>Dashboard</h1>
          <div className="flex items-center gap-4">
            <img
              onClick={() => history("../notification")}
              src={notifyIcon}
              alt="Bell Icon"
            />
            <span
              onClick={() => history("../profile")} 
              className="rounded-full text-white px-3 py-1 text-xl bg-[#6C8571] cursor-pointer"
            >T</span>
          </div>
        </nav>
      </header>
      <section className='text-[#263A5C] grid grid-cols-2 items-center my-6 gap-6 sm:gap-6 sm:w-[55%] sm:mx-auto'>
        <div 
          className="icon-container flex flex-col mx-auto shadow-md rounded-md p-6 cursor-pointer sm:w-[120px]  md:py-8"
          onClick={()=> history('/schedule')}
        >
          <img src={scheduleIcon} alt="Schedule" />
          <p className='text-center'>Schedule</p>
        </div>
        <div 
          className="icon-container flex flex-col mx-auto shadow-md rounded-md p-6 cursor-pointer sm:w-[120px]  md:py-8"
          onClick={()=> history('/chat')}
        >
          <img src={chatIcon} alt="Chat" />
          <p className='text-center'>Chat</p>
        </div>
        <div 
          className="icon-container flex flex-col mx-auto shadow-md rounded-md p-6 cursor-pointer sm:w-[120px]  md:py-8"
          onClick={()=> history('/activity')}
        >
          <img src={activityIcon} alt="Activity" />
          <p className='text-center'>Activity</p>
        </div>
        <div 
          className="icon-container flex flex-col mx-auto shadow-md rounded-md p-6 cursor-pointer sm:w-[120px]  md:py-8"
          onClick={()=> history('/emergency')}
        >
          <img src={emergencyIcon} alt="Emergency" />
          <p className='text-center'>Emergency</p>
        </div>
      </section>
      <section className='my-12'>
        <h2 className='text-[#263A5C] text-2xl text-center'>Activity</h2>
        <Barchart />
      </section>
    </div>
  )
}