import separator from '../images/Separator.svg';

export default function SingleSched () {
  return (
    <>
      <section>
        <div className="flex flex-col items-center">
          <p className="text-center font-pops font-medium"><span className="font-bold">1</span>Schedule Information</p>
          <img src={separator} alt="" />
        </div>
        <h1 className="text-[#263A5C] font-pops my-4 font-bold text-center" >Schedule an Appointment</h1>
        <form action="" className="flex flex-col my-4 font-pops">
          <label className="text-black" htmlFor="Type">Type</label>
          <input placeholder="Type" className="border-gray-400 border-[1px] rounded w-3/4 mb-2 pt-1 pl-2" id="Type" type="text" />
          <label className="text-black" htmlFor="category">Category</label>
          <input placeholder="Category" className="border-gray-400 border-[1px] rounded w-3/4 mb-2 pt-1 pl-2" id="category" type="text" />
          <label className="text-black" htmlFor="title">Title</label>
          <input placeholder="Title" className="border-gray-400 border-[1px] rounded w-3/4 mb-2 pt-1 pl-2" id="title" type="text" />
          <label className="text-black" htmlFor="decription">Description</label>
          <input placeholder="Description" className="border-gray-400 border-[1px] rounded w-3/4 mb-2 pt-1 pl-2" id="decription" type="text" />
          <label className="text-black" htmlFor="date">Choose a Starting Date</label>
          <input className="border-gray-400 border-[1px] rounded w-3/4 mb-2 pt-1 pl-2" id="date" type="date" />
          <button className="rounded self-center px-4 py-1 text-white font-pops my-4 bg-[#263A5C]">Finish</button>
        </form>
      </section>
    </>
  )
}