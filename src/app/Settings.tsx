import { useState } from 'react'
import searchIcon from '../images/ic_round-search.svg'
import on from '../images/SwitcherOn.svg'
import off from '../images/SwitcherOff.svg'
import notifyIcon from '../images/ri_notification-4-line.svg'
import { useNavigate } from 'react-router';

export default function Settings() {
  const history = useNavigate();

    const [isOn, setIsOn] = useState(true);
    const [isOn2, setIsOn2] = useState(true);
    const [isOn3, setIsOn3] = useState(true);
    const [isOn4, setIsOn4] = useState(true);
    

  
  const toggleImage = () => {
    setIsOn(!isOn);
  }
  const toggleImage2 = () => {
    setIsOn2(!isOn2);
  }
  const toggleImage3 = () => {
    setIsOn3(!isOn3);
  }
  const toggleImage4 = () => {
    setIsOn4(!isOn4);
  }
  
    return (
      <div
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '400',
      }}
      >
        <header className='hidden md:block'>
          <nav className="topHeader flex justify-between items-center my-10">
            <h1 className='text-2xl text-[#263A5C] font-bold'>Settings</h1>
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
        <div className=' h-[45vh] sm:h-[50vh]  w-full m-auto mt-[30px]  flex flex-col justify-between'>
  <div className='flex items-center '>
    <div>
      <b><h1>Notification</h1> </b>
              <p>Allow notifications from this app</p>
    </div>
    <img onClick={toggleImage} className='ml-auto hover:cursor-pointer' src={isOn ? on : off} alt="" />
          </div>
    <div className='w-full bg-gray-300 h-[1px] '>
    </div>
  <div className='flex items-center'>
    <b><p>Show notifications from this app</p></b> 
    <img onClick={toggleImage2} className='ml-auto hover:cursor-pointer' src={isOn2 ? on : off} alt="" />
          </div>
          <div className='w-full bg-gray-300 h-[0.1rem] '>
    </div>
  <div className='flex items-center'>
  <div>
     <b><h1>Sounds</h1> </b>  
      <p>None</p>
    </div>
    <img onClick={toggleImage3} className='ml-auto hover:cursor-pointer' src={isOn3 ? on : off} alt="" />
          </div>
          <div className='w-full bg-gray-300 h-[0.1rem] '>
    </div>
  <div className='flex items-center'>
   <b><p>Vibrate</p></b> 
    <img onClick={toggleImage4} className='ml-auto hover:cursor-pointer' src={isOn4 ? on : off} alt="" />
          </div>
    <div className='w-full bg-gray-300 h-[0.1rem] '>
    </div>
      <p>Change email adress</p>
      <div className='w-full bg-gray-300 h-[0.1rem] '>
    </div>
  <p>Reset Password</p>        
</div>

      </div>
    )
  }
