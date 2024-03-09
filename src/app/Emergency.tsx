import contact from '../images/mdi_contact.svg'
import compass from '../images/compass.svg'
import Map from './components/Map'
import emergency from '../images/jam_triangle-danger-f.svg'
import notifyIcon from '../images/ri_notification-4-line.svg'
import { useNavigate } from 'react-router';

export default function Settings() {
  const history = useNavigate();

  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '300',
      }}
    >
      <header className='hidden md:block'>
        <nav className="topHeader flex justify-between items-center my-10">
          <h1 className='text-2xl text-[#263A5C] font-bold'>Emergency</h1>
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
      <div className=' m-auto w-[fit]'>
      <div
        style={{
        boxShadow:'2px 2px 3px rgba(0, 0 ,0 ,0.5)'
        }}
        className=' w-full flex bg-white m-auto mt-[30px] p-[6px] '
      >
        <img className='ml-4' src={contact} alt="" />
        <div className='m-auto text-[18px]'>
          <p>Tosin Poppins</p>
          <p className='text-gray-400'>tosinpoppins@gmail.com</p>
        </div>
        <img className='ml-auto mr-3 mt-[10px]' src={compass} alt="" />
      </div>
      <div
        style={{
        boxShadow:'2px 2px 3px rgba(0, 0 ,0 ,0.5)'
        }}
        className='w-full flex bg-white m-auto mt-[30px] p-[6px] '
      >
        <img className='ml-4' src={contact} alt="" />
        <div className='m-auto text-[18px]'>
          <p>Tosin Poppins</p>
          <p className='text-gray-400'>tosinpoppins@gmail.com</p>
        </div>
        <img className='ml-auto mr-3 mt-[10px]' src={compass} alt="" />
      </div>
      <Map></Map>
      </div>
      <img src={emergency} className='m-auto mt-[30px]' alt="" />
    </div>
  )
}