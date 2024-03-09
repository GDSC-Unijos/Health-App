import searchIcon from '../images/ic_round-search.svg'
import bigIcon from '../images/ProfilePic.svg'
import notification from '../images/clarity_notification-solid.svg'
import notifyIcon from '../images/ri_notification-4-line.svg'
import { useNavigate } from 'react-router';


export default function Notification() {
  const history = useNavigate();

  return (
    <div className='sm:flex'>
      <div className='  items-center w-full'>
        <header className='hidden md:block'>
          <nav className="topHeader flex justify-between items-center my-10">
            <h1 className='text-2xl text-[#263A5C] font-bold'>Notifications</h1>
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
        <div >          
          <div className=' w-fit m-auto mt-[50px]'>
            <div className='flex'>
            <img src={bigIcon} alt="" className='p-[5px] w-[90px]' />
            <h1 className='m-auto text-[30px] p-[5px]'>Tosin Poppins</h1>
            </div>
          <p className='ml-[30px] mb-[30px] text-[25px]'>789001827</p>
          </div>
          <div>
          <div
            style={{
              borderLeft: '1px rgba(161,164,170 ,0.5)  solid',
              boxShadow:'2px 3px 2px rgba(161,164,170 ,0.5)'

            }}
            className='flex m-auto mt-[15px] w-[95%] p-[5px] rounded-md'>
            <img src={notification} alt="" className='w-[25px] h-[25px]  md:w-[50px] md:h-[50px] p-[1px] mt-auto mb-auto mr-[20px] ml-[20px]' />
            <div>
              <p className='text-[#464E5F] w-full text-[18px] md:text-[30px] md:pr-[2rem] '>Congratulations You completed today’s task</p>
              <span className='text-[#A1A4AA] ml-[3px] '>2:00pm</span>
            </div>
          </div> 
          </div>
          <div>
          <div
            style={{
              borderLeft: '1px rgba(161,164,170 ,0.5)  solid',
              boxShadow:'2px 3px 2px rgba(161,164,170 ,0.5)'

            }}
            className='flex m-auto mt-[15px] w-[95%] p-[5px] rounded-md'>
            <img src={notification} alt="" className='w-[25px] h-[25px]  md:w-[50px] md:h-[50px] p-[1px] mt-auto mb-auto mr-[20px] ml-[20px]' />
            <div>
              <p className='text-[#464E5F] w-full text-[18px] md:text-[30px] md:pr-[2rem] '>Congratulations You completed today’s task</p>
              <span className='text-[#A1A4AA] ml-[3px] '>2:00pm</span>
            </div>
          </div> 
          </div>
        </div>
      </div>
    </div>
  )
}