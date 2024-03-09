import { NavLink, Outlet } from "react-router-dom";

export default function RecurWrap () {
  return(
    <div className="w-[90%] mx-auto">
      <nav className="slideNav w-[95%] mx-auto my-4 text-[10px] md:text-lg">
        <ul className="slideNav font-pops flex w-full gap-1 justify-between text-[#C9C9C9]">
          <li><NavLink className='border-b-2 border-[#C9C9C9]' to="recurring1" ><span className="text-[11px] md:text-xl">1</span> Schedule Information</NavLink></li>
          <li><NavLink className='border-b-2 border-[#C9C9C9]' to="recurring2"><span className="text-[11px] md:text-xl">2</span> Choose how it Recurs</NavLink></li>
          <li><NavLink className='border-b-2 border-[#C9C9C9]' to="recurring3"><span className="text-[11px] md:text-xl">3</span> Confirm Schedule</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}