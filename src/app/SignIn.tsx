import { Link, RouteProps} from "react-router-dom";
import Onboard from "./components/Onboard";
import google from '../images/google.png'
import { useState } from "react";
import { useNavigate } from 'react-router';


export default function SignIn(){
  const [id ,setId] = useState('')
  const [password ,setPassword] = useState('')
  const [sigining, setSigning] = useState(false) 
  const [error, setErrorMessage] = useState('')
    // https://senexcare.onrender.com/user/login

    const history = useNavigate();
 
  
  const constructFormData = () => {
    return {
      id: id,
      password: password
    };
  };
  // const MyComponent: React.FC<RouteProps> = ({ history }) => {}
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = constructFormData();
    console.log(formData);
  
    try {
      const response = await fetch( 'https://senexcare.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', JSON.stringify(data));
        history("../Dashboard")
      } else {
        const data = await response.json();
        setErrorMessage(data)
        console.error('Failed to submit form data:', data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const signWithGoogle= async ()=>{
    console.log('clicked')
   try {
    const response = await fetch('https://senexcare.onrender.com/auth/google', { method: 'GET' });
     if (response.ok) {
      const data = response.json()
      console.log(data)
    } else {
      console.error('Failed to initiate Google authentication');
    }
   } catch (error) {
    
   }
  }
    return(

  <section
     style={{
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '300',
    }}
        className="relative flex flex-wrap lg:h-screen lg:items-center ">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12 ">
  <main className="flex items-center justify-center px-8 py-10 sm:px-15 lg:col-span-6 lg:px-16 lg:py-12 xl:col-span-6 ">
      <div className="border-solid border border-gray rounded-lg p-[20px] sm:ml-[100px] lg:m-auto">
          <div className="mx-auto max-w-lg text-center">
              <h1
                style={{
                  fontFamily:'Clash Display, sans-serif'
                }}
                className="text-4xl font-bold sm:text-3xl text-[#263A5C] text-center">Login</h1>

          <p className="mt-4 text-[#B1B5B9] text-center text-xl">
            Input your details
          </p>
        </div>

        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4 " onSubmit={handleSubmit}>
          <div className="w-full">
            <label htmlFor="email" className="sr-only">Enter your Id</label>
             <p className="text-[#B1B5B9] pb-[5px] text-[18px] font-medium w-[20rem] m-auto ">Enter Your Id</p>
            <div className="relative flex justify-center">
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-[20rem] border-[#B1B5B9] border-[1px] rounded-[6px] bg-rgba-34-31-31-40 p-3 outline-none text-xl shadow-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <p className="text-[#B1B5B9] pb-[5px] text-[18px] font-medium w-[20rem] m-auto">Enter Your Password</p>
            <div className="relative flex justify-center">
              <input
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-[20rem] border-[#B1B5B9] border-[1px] rounded-[6px] outline-none p-3  text-xl shadow-sm"
              />
                </div>
                <div className=" w-[24rem] flex justify-end ">
                <p className=" text-[#0099D7] text-[15px] text-end">Forgot Password?</p>
                </div>
              </div>
              <div className=" w-full flex justify-center">
                {/* <Link to='/dashboard'> */}
              <button
              type="submit"
              className=" rounded-[20px] bg-[#263A5C] px-14 py-3 text-sm font-medium text-white m-auto"
            >
              Sign in
            </button>
                {/* </Link> */}
              </div>
            <p
              style={{
                fontFamily:'Clash Display, sans-serif',
                fontWeight: '500',
            }}
            className="text-[#e34141] text-center ">{error}</p>
              <div className="flex  justify-center ">
            <p className="text-lg text-[#221F1F]">
              Don't have an account?
              <Link className="text-[#407CE2]" to="/signup">   Sign up</Link>
            </p>
          </div>
          <button
            type="button"
            onClick={signWithGoogle}
            className="w-[20rem] flex text-center mt-7 bg-white border border-solid justify-center m-auto"
            >
          <img className="w-[2rem] m-2" src={google} alt="google" />
          <h2 className="m-3 font-medium">Sign In with Google</h2>
          </button>

        </form>
       

      </div>
    
  </main>
  <aside className="relative lg:col-span-6 lg:h-full hidden lg:block h-[100vh] bg-[#263A5C]">
    {/* <div className=""> */}
      <Onboard />
    {/* </div> */}
  </aside>
  </div>
</section>
        
    )
}           