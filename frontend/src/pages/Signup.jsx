import React, {useState} from 'react'
import cat from "D:/PAS/frontend/public/pngegg (5).png"
import { NavLink , useNavigate} from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'

function Signup() {  
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()

  const handleUser = () =>{
    const user ={
      username,
      email,
      password,
    }
    axios.post('http://localhost:8080/user/register', user)
    .then(() =>{
      toast.success("Successfully User Registered")
      navigate("/login")
    })
    .catch((error)=>{
      toast.error('An error happened. Put proper information');
      setEmail('');
      setPassword('');
      console.log(error);
    })
  }
   
  return (
    <div>
      <div className='h-screen flex justify-center items-center '>
        <div className='bg-white h-[550px] w-[1000px] flex rounded-xl'>
          <div className='bg-yellow-500  h-full w-1/2 rounded-l-xl '>
            <img className='pt-[10px] h-[550px] '
              src={cat} alt=""/> 
          </div>
          <div className='h-full w-1/2 rounded-r-xl p-10 font-Mont'>
            <h1 className='text-[50px]  text-center pb-10 '>
              SIGN IN
            </h1>
            <input 
              type="text" 
              placeholder='Username'
              className='w-[400px] mx-[10px] px-[20px] h-[40px] border-2 rounded-sm mb-[20px]' 
              value={username} onChange={(e)=> setUsername(e.target.value)}
            />

            <input 
              type="email" 
              placeholder='Email' 
              className='w-[400px] mx-[10px] px-[20px] h-[40px] border-2 rounded-sm mb-[20px]'
              value={email} onChange={(e)=> setEmail(e.target.value)}
            />
            <input 
              type="text" 
              placeholder='Password' 
              className='w-[400px] mx-[10px] px-[20px] h-[40px] border-2 rounded-sm mb-[20px]'
              value={password} onChange={(e)=> setPassword(e.target.value)} 
            />
            <button 
              className='text-center bg-yellow-500 w-[350px] h-[50px] mx-[35px] my-6 text-[20px] rounded-full font-medium' 
              onClick={handleUser}>
                  Sign Up
            </button>
            <p>
              Already a member? 
              <NavLink to={"/login"} className={"font-bold"}>
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup