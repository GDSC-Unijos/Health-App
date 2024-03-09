import { Link } from "react-router-dom";

export default function () {
  return(
    <>
      <section>
        <h1 className="text-[#263A5C] font-pops text-center my-6 text-xl font-bold">Schedule an Appointment</h1>
        <form action="" className="flex flex-col my-4 mx-auto font-pops w-[90%]">
          <label className="text-black" htmlFor="Type">Type</label>
          <input placeholder="Type" className="border-gray-400 border-[1px] rounded w-[90%] mb-4 pt-1 pl-2" id="Type" type="text" />
          <label className="text-black" htmlFor="category">Category</label>
          <input placeholder="Category" className="border-gray-400 border-[1px] rounded w-[90%] mb-4 pt-1 pl-2" id="category" type="text" />
          <label className="text-black" htmlFor="title">Title</label>
          <input placeholder="Title" className="border-gray-400 border-[1px] rounded w-[90%] mb-4 pt-1 pl-2" id="title" type="text" />
          <label className="text-black" htmlFor="decription">Description</label>
          <input placeholder="Description" className="border-gray-400 border-[1px] rounded w-[90%] mb-4 pt-1 pl-2" id="decription" type="text" />
          <label className="text-black" htmlFor="date">Choose a Starting Date</label>
          <input className="border-gray-400 border-[1px] rounded w-[90%] mb-4 pt-1 pl-2" id="date" type="date" />
          <label className="text-black" htmlFor="time">Choose a Starting Time</label>
          <input className="border-gray-400 border-[1px] rounded w-[90%] mb-4 pt-1 pl-2" id="time" type="time" />
          <button className="rounded self-center px-4 py-1 text-white font-pops my-4 bg-[#263A5C]">NEXT</button>
        </form>
      </section>
    </>
  )
}