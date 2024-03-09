import profile from '../images/profilepic2.svg'
import info from '../images/information.svg'
import send from '../images/sendMessage.svg'
import ai from '../images/carbon_watsonx-ai.svg'
import notifyIcon from '../images/ri_notification-4-line.svg'
import { useNavigate } from 'react-router';

export default function Notification() {
  const history = useNavigate();

  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '400',
      }}
    >
      <header className='hidden md:block'>
        <nav className="topHeader flex justify-between items-center my-10">
          <h1 className='text-2xl text-[#263A5C] font-bold'>Chat</h1>
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
      <div className=' w-full sm:w-[90%] m-auto  my-12 p-[10px] max-w-[60rem] rounded-lg border-[1px] border-[solid] border-[#E1E2FF] '>
        <div className='flex  border-b-[1px] border-b-[solid] border-b-[#E1E2FF] '>
          <div className='w-fit mt-[5px]'>
          <img src={ai} alt=""  />
          </div>
          <div>
            <p className='text-[20px] ml-[5px] font-bold'>Al</p>
            <p className='text-[18px]  font-bold'>#7286376</p>
          </div>
          <div className='ml-[auto] w-[3%] items-center  '>
          <img src={info} alt="" className='w-full mt-[50%] mb-[50%] ' />
          </div>
        </div>
        <div 
         style={{
          height: '67vh', 
          overflowX: 'auto' 
        }}
        >
          <div className='w-[85%] flex ' >
            <img src={ai} alt="" className='m-[10px]' />
            <div>
            <div className='  bg-white text-[#263A5C] mr-auto mt-[20px] border-[#333333] border-[1px] border-[solid] rounded-lg p-[12px] '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores impedit minima quasi incidunt, quas, unde quae cum magni nobis, labore voluptate exercitationem. Unde incidunt amet nemo necessitatibus aut cumque totam ullam esse labore ex, impedit, tempora autem. Modi odio, distinctio repellat delectus sequi in doloribus expedita minus ab obcaecati?.</p>
          </div>
          <p className='text-end w-fit mr-auto ml-[3px] text-[#333333] ' >8pm</p>
            </div>
          </div>
          <div className='w-[85%] flex ml-auto'>
            <div>
          <div className=' bg-[#263A5C] text-[white] ml-auto mt-[20px] rounded-lg p-[12px] '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores impedit minima quasi incidunt, quas, unde quae cum magni nobis, labore voluptate exercitationem. Unde incidunt amet nemo necessitatibus aut cumque totam ullam esse labore ex, impedit, tempora autem. Modi odio, distinctio repellat delectus sequi in doloribus expedita minus ab obcaecati?.</p>
          </div>
          <p className='text-end w-fit ml-auto mr-[3px] text-[#333333] ' >8pm</p>
            </div>
            <img src={profile} alt="" className='m-[auto] ml-[10px] mr-[10px] w-[30px] h-[30px]' />
          </div>
        </div>
        <div className='bg-white flex w-[80%] m-auto p-[4px] mb-[10px] mt-[10px] border-[solid] border-[1px] rounded-md border-[black] '>
          <input type="text" className='outline-none w-[100%]' />
          <img src={send} alt="" className='hover:cursor-pointer' />
        </div>
      </div>
    </div>
  )
}