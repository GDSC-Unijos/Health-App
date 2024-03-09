import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import SignUp from './app/SignUp';
import SignIn from './app/SignIn';
import Home from './app/Hompage';
import Dashboard from './app/Dashboard';
import Schedule from './app/Schedule';
import Chat from './app/Chat';
import Activty from './app/Activty';
import Emergency from './app/Emergency';
import Profile from './app/Profile';
import Settings from './app/Settings';
import Notification  from './app/Notification'
import Sidenav from './app/components/Sidenav';
import ScheduleWrap from './app/components/ScheduleWrapper';
import NewSched from './app/NewSchedule';
import SingleSched from './app/SingleSchedule';
import RecurWrap from './app/components/RecurringWrap';
import RecurSched from './app/RecurSchedule';
import RecurSched2 from './app/RecurSchedule2';
import RecurSchedule3 from './app/RecurSchedule3';
 

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='signin' element={<SignIn/>} />
        <Route path='profile' element={<Profile/>} />
        <Route element={<Sidenav/>}>
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='schedule' element={<ScheduleWrap/>} >
            <Route index element={<Schedule/>} />
            <Route path='new-schedule' element={<NewSched/>} />
            <Route path='single-schedule' element={<SingleSched/>} />
            <Route element={<RecurWrap/>}>
              <Route path='recurring1' element={<RecurSched/>}/>
              <Route path='recurring2' element={<RecurSched2/>} />
              <Route path='recurring3' element={<RecurSchedule3/>} />
            </Route>
          </Route>
          <Route path='chat' element={<Chat/>} />
          <Route path='activity' element={<Activty/>} />
          <Route path='emergency' element={<Emergency/>} />
          <Route path='settings' element={<Settings/>} />
          <Route path='notification' element={<Notification/>} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
