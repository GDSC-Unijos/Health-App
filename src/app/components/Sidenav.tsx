import React from 'react'
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import notify from "../../images/ri_notification-4-line.svg";


import { Link, Outlet, useLocation } from "react-router-dom";
import Dashboardsvg from "../../images/ic_sharp-dashboard.svg"
import Schedulesvg from "../../images/uis_schedule.svg"
import messagesvg from "../../images/ic_baseline-chat.svg"
import Activitysvg from "../../images/jam_activity.svg"
import Emergencysvg from "../../images/material-symbols_emergency-home-outline.svg"
import Profilesvg from "../../images/iconamoon_profile-fill.svg"
import Settingssvg from "../../images/settings_24px.svg"
import Logosvg from "../../images/senexCare.svg"
import Picture from "../../images/Frame 2608382.svg"

import Dashboarddark from "../../images/ic_sharp-dashboard.dark.svg"
import Scheduledark from "../../images/uis_schedule..dark.svg"
import messagedark from "../../images/ic_baseline-chat.dark.svg"
import Activitydark from "../../images/jam_activity.dark.svg"
import Emergencydark from "../../images/material-symbols_emergency-home-outline (1).svg"
import profiledark from "../../images/iconamoon_profile-fill.dark.svg"
import settingsdark from "../../images/ic_round-settings.dark.svg"
import logout from "../../images/solar_logout-bold (1).svg"


export default function Sidenav() {
  const location = useLocation();
  const path = location.pathname;
  const formattedPath = path.split('/').filter(Boolean)[0];
  const capitalizedPath = formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
  
  const [Nav, navhidden] = useState(false)

  const changenav = () => {
    navhidden(!Nav)
  }

  return (
    <div className='w-full md:flex'>
      <div
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '500',
        }}  
        className='mobiledesktop nav sm:max-w-[100%] md:w-[23%]'>
        <div className='hidden bg-[#263A5c]  text-white h-screen md:block sticky top-0'>
          <div className='pl-20'>
            <img className='pt-10 w-[60%]' src={Logosvg} alt="" />
            <div className='flex pt-[4rem] text-center'>
              <img className='px-3 ' src={Dashboardsvg} alt="" />
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className='flex pt-10 text-center'>
              <img className='px-3' src={Schedulesvg} alt="" />
              <Link to="/schedule">Schedule</Link>
            </div>
            <div className='flex pt-10 text-center '>
              <img className='px-3' src={messagesvg} alt="" />
              <Link to="/chat">Chat</Link>
            </div>
            <div className='flex pt-10 text-center '>
              <img className='px-3' src={Activitysvg} alt="" />
              <Link to="/activity">Activty</Link>
            </div>
            <div className='flex pt-10 text-center '>
              <img className='px-3' src={Emergencysvg} alt="" />
              <Link to="/emergency">Emergency</Link>
            </div>
            <div className='flex pt-10 text-center'>
              <img className='px-3' src={Profilesvg} alt="" />
              <Link to="/profile">Profile</Link>
            </div>
            <div className='flex pt-10 text-center'>
              <img className='px-3' src={Settingssvg} alt="" />
              <Link to="/settings">Settings</Link>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)'

         }}
          className={Nav ? '   flex h-screen md:hidden w-full fixed ease-in-out duration-1000 text-[#263638]' : "fixed left-[-100%] ease-in-out duration-500"} >
          <div className='bg-white py-2 min-w-[300px] '>
            <div onClick={changenav}>
              <MdClose size={30} className='ml-[80%]' />
            </div>
            <div className='flex px-3 border-b-gray border-b-2  pb-3'>
              <img className='px-3' src={Picture} alt="" />
              <div className='text-[#585555] font-normal' >
                <h1>Hi! Deborah Allen</h1>
                <p>deborahallen12@gmail.com</p>
              </div>

            </div>
            <div className={Nav ? 'pl-11 ease-in-out duration-1000 ' : ''}>
              <div className='flex mr-[40px] pt-[2rem] text-center '>
                <img className='px-3 ' src={Dashboarddark} alt="" />
                <Link to="/dashboard" onClick={changenav}>Dashboard</Link>
              </div>
              <div className='flex mr-[30px] pt-10 text-center j'>
                <img className='px-3' src={Scheduledark} alt="" />
                <Link to="/schedule" onClick={changenav}>Schedule</Link>
              </div>
              <div className='flex mr-[30px] pt-10 text-center '>
                <img className='px-3' src={messagedark} alt="" />
                <Link to="/chat" onClick={changenav}>Chat</Link>
              </div>
              <div className='flex mr-[30px] pt-10 text-center '>
                <img className='px-3' src={Activitydark} alt="" />
                <Link to="/activity" onClick={changenav}>Activity</Link>
              </div>
              <div className='flex mr-[30px] pt-10 text-center '>
                <img className='px-3' src={Emergencydark} alt="" />
                <Link to="/emergency" onClick={changenav}>Emergency</Link>
              </div>
              <div className='w-[300px] mt-[50px] bg-gray-300 h-[0.1rem] ml-[-45px] '>
              </div>
              <div className='flex mr-[30px] pt-10 text-center'>
                <img className='px-3' src={profiledark} alt="" />
                <Link to="/profile" className='text-center' onClick={changenav}>Profile</Link>
              </div>
              <div className='flex mr-[30px] pt-10 text-center'>
                <img className='px-3' src={settingsdark} alt="" />
                <Link to="/settings" onClick={changenav}>Settings</Link>
              </div>
              <div className=' w-fit ml-[30px] mt-[30px] '>
              <Link to="/" className='bg-[#263238] text-white my-5 p-[3px] m-auto  rounded-md flex text-center justify-center items-center mr-5 w-[4rem]'>
                <img src={logout} alt="" />
                <p></p>
              </Link>
              </div>
            </div>
          </div>
          <div className=' bg-gray-100 w-full bg-opacity-90 text-black h-screen'>
          </div>
        </div>

        <div className='p-4 sm:px-12 flex items-center justify-between md:hidden'>
          {!Nav ? <RxHamburgerMenu size={30} onClick={changenav}/> : ""}
          <p className='text-[#263A5C] text-base'>{capitalizedPath}</p>
          <Link to='/notification'>
            <img src={notify} alt="" className='m-[3px] w-[30px] h-[30px] ' />
            </Link>
        </div>
      </div>
      <main className="container px-4 sm:px-12 mx-auto mb-10 md:w-[77%]">
        <Outlet/>
      </main>
    </div>
  )
}
