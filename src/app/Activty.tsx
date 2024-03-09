import BarChart from './components/Barchart';
import LineGraph from './components/Linegraph';
import notifyIcon from '../images/ri_notification-4-line.svg'
import Piechart from './components/Pie';
import { useNavigate } from 'react-router';

const MainComponent = () => {
  const history = useNavigate();

  return (
    <div
    style={{
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '500',
  }}
    >
      
   <div className='  items-center w-full'>
      <header className='hidden md:block'>
        <nav className="topHeader flex justify-between items-center my-10">
          <h1 className='text-2xl text-[#263A5C] font-bold'>Activity</h1>
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
    </div>

      <LineGraph/>
      <BarChart />
      <Piechart/>
    </div>
  );
};

export default MainComponent;
