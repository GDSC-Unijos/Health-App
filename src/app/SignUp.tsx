import React, {useState} from "react"
import { Link } from "react-router-dom"
import Onboard from "./components/Onboard"
import google from '../images/google.png'

export default function SignUp(){                     
  const [name, setFirstName] = useState('')
  const [age, setAge] = useState('select age')
  const [gender, setGender] = useState('select gender')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [data, setData] = useState('');

  // const [showPassword, setShowPassword] = useState(false);
  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // }
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setData('Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://senexcare.onrender.com/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           name,
          email,
          number:phone,
           gender,
           age,
          password,
      }),
      });
      const data = await response.json()
      console.log(data)
    setData(data);
    if (response.ok) {
      setIsLoading(false);
    } else if(response.status === 401) {
      setData(data);
      setIsLoading(false);
    }else if (response.status === 404){
      setData(data);
      setIsLoading(false);
    }else{
      setData('Could not create account');
      setIsLoading(false);
    }
  }
    catch (error) {
      console.log("Topins' Error:", error);
      setIsLoading(false);
    }
  }








    return(
  

<section className="bg-white ">
<div className="lg:grid lg:min-h-screen lg:grid-cols-12 ">
  <main
    className="flex items-center justify-center px-8 py-10 sm:px-15 lg:col-span-6 lg:px-16 lg:py-12 xl:col-span-6  "
  >
    <div className=" w-fit lg:max-w-3xl border-[#B1B5B9] border-[1px] rounded-[6px] p-[40px]">
      
      <div className="w-full ">
      {/* <Link className="block text-blue-600" to="#">
        <span className="sr-only">Home</span>
        <svg
          className="h-8 sm:h-10"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
            fill="currentColor"
          />
        </svg>
      </Link> */}
                <h1
          style={{
            fontFamily:'Clash Display, sans-serif'
          }}
                  className=" text-2xl font-bold text-[#263A5C] sm:text-3xl md:text-4xl text-center">
        Sign Up
      </h1>
      <form action="#" onClick={handleSubmit} className="mt-8 ">
        <div className="col-span-6 sm:col-span-3 flex justify-center m-[20px]">         
          <input
          value={name}
          onChange={(e) => setFirstName(e.target.value)}
            type="text"
                  id="Name"
                  placeholder="Enter your Name"
            name="Name"
            className="w-[20rem] bg-rgba-34-31-31-10 border-[#B1B5B9] border-[1px] rounded-[6px] outline-none  p-3  text-xl shadow-sm"
          />
        </div>
        <div className="flex justify-between w-[20rem] m-auto">               
        <div className="col-span-6 sm:col-span-3   border-[#B1B5B9] border-[1px] rounded-[6px] outline-none  p-3  text-sm shadow-s w-[9rem]">
            <select className="outline-none " id="dropdown" name="dropdown"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >

                <option value="option1" className="text-[#B1B5B9] outline-none " disabled>Select age:</option>
                <option value="option1" className="text-[#B1B5B9] outline-none">0-5years</option>
                <option value="option2" className="text-[#B1B5B9] outline-none">6-11years</option>
                <option value="option3" className="text-[#B1B5B9] outline-none">12-19years</option>
                <option value="option3" className="text-[#B1B5B9] outline-none">20-49years</option>
                <option value="option3" className="text-[#B1B5B9] outline-none">50 and above</option>
           </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3   border-[#B1B5B9] border-[1px] rounded-[6px] outline-none  p-3  text-sm shadow-s w-[9rem]">
            <select className="outline-none " id="dropdown" name="dropdown"
              value={gender}
              onChange={(e) => setGender(e.target.value)} >
              <option value="" disabled selected>Select Gender</option>
            <option value="Male" className="text-[#B1B5B9] outline-none">Male</option>
           <option value="Female" className="text-[#B1B5B9] outline-none">Female</option>
           <option value="Rather Not Say" className="text-[#B1B5B9] outline-none">Rather Not Say</option>
           </select>
        </div>
         </div>
        

        <div className="col-span-6 flex justify-center m-[20px]">
          < input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="Email"
            name="email"
            placeholder="Enter your email"
            className="w-[20rem] border-[#B1B5B9] border-[1px] rounded-[6px]  p-3 outline-none  text-lg shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 flex justify-center m-[20px] ">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="Password"
            placeholder="Enter your Password"
            name="password"
            className="w-[20rem] border-[#B1B5B9] border-[1px] rounded-[6px] outline-none  p-3  text-xl shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 flex justify-center m-[20px]">
          <input
           value={phone}
           onChange={(e) => setPhone(e.target.value)}
            type="text"
                      id="phone"
                      placeholder="Enter your phone number"
            name="password_confirmation"
            className="w-[20rem] border-[#B1B5B9] border-[1px] rounded-[6px] bg-rgba-34-31-31-40 p-3 outline-none text-xl shadow-sm"
          />
                  </div>
        <div className="col-span-6 flex">
             <input type="checkbox" name="" id="" />
          <p className="text-sm text-gray-500 ml-[10px]">
            I agree to the healthcare 
            <span className="text-[#407CE2]"> Terms of Service  </span>
            and
            <span className="text-[#407CE2]"> Privacy Policy</span>
          </p>
        </div> 
      </form>
      <button className="w-[20rem] flex text-center mt-[30px] bg-white border border-solid justify-center m-auto">
            <img className="w-[2rem] m-2"
            src={google}
            alt="google"
            />
            <h2 className="m-3 font-semibold">Sign In with Google</h2>
        </button>
                <div className=" w-full flex justify-center mt-[30px]">
                  <Link to='/dashboard'>
              <button
              type="submit"
              className=" rounded-[20px] bg-[#263A5C] px-14 py-3 text-sm font-medium text-white m-auto"
            >
              Sign in
            </button>
                  </Link>
              </div>
     
       
      </div>
          <div className="flex  justify-center mt-[20px] ">
            <p className="text-lg text-[#221F1F]">
              Already have an account?
              <Link className="text-[#407CE2]" to="/signin" >   Sign Up</Link>
                </p>
                </div>
    </div>
  </main>
  <aside className="relative  lg:col-span-6 lg:h-full hidden lg:block h-[100vh] bg-[#263A5C]">
    {/* <div className=""> */}
      <Onboard />
    {/* </div> */}
  </aside>
</div>
</section>
    )
}