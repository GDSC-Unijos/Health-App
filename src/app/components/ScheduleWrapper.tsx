import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router';
import notifyIcon from '../../images/ri_notification-4-line.svg'

export default function ScheduleWrap() {
  const history = useNavigate();

  return(
    <>
    <header className='hidden md:block'>
      <nav className="topHeader flex justify-between items-center my-10">
        <h1 className='text-2xl text-[#263A5C] font-bold'>Schedule</h1>
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
      <Outlet/>
    </>
  )
}