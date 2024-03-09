import { Link } from "react-router-dom";

export default function RecurSched2 () {
  return(
    <>
      <section>
        <h1 className="text-[#263A5C] font-pops text-center my-6 text-xl font-bold">Choose How it Recurs</h1>
        <form action="" className="flex flex-col my-4 mx-auto font-pops w-[90%]">
          <label className="text-black" htmlFor="freq">Frequency</label>
          <input placeholder="Frequency" className="border-gray-400 border-[1px] rounded w-[90%] mb-4 pt-1 pl-2" id="freq" type="text" />
          <label className="text-black" htmlFor="day/week">Days of Week</label>
          <input placeholder="Category" className="border-gray-400 border-[1px] rounded w-[90%] mb-4 pt-1 pl-2" id="day/week" type="text" />
          <Link to='../recurring3' className="rounded self-center px-4 py-1 text-white font-pops my-4 bg-[#263A5C]">NEXT</Link>
        </form>
      </section>
    </>
  )
}