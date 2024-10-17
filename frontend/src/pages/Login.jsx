import React,  { useState } from 'react'
import pug from "D:/PAS/frontend/public/blackpug.png"
import { NavLink , useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'


function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const handleUser = async() =>{
    console.log("entered")
    const user ={    
      email,
      password,
    }
    console.log(user);  
    try {
      const res = await axios.post('http://localhost:8080/user/login', user, {withCredentials: true,})
      console.log(res.data.token)
      // if(res.data.token){
      //   Cookies.set('token',res, { expires: 1, path: '/', secure: true, sameSite: 'Strict' })
        
      //   alert('Successfully User Logged in');
      //   navigate('/');
      // } else {
      //   alert('Login failed: No token received');
      // }
      if (res.status === 200) {
        toast.success('Successfully logged in');
        navigate('/');
        setTimeout(() => {
          window.location.reload();
        }, 500)
      } else {
        toast.error('Login failed: ' + res.data.message);
      }
    }catch (error) {
      toast.error('An error happened. Please check console');
      console.log(error);
    }

    //   await axios.post('http://localhost:8080/user/login', user , {
    //     withCredentials: true, 
    // })
    //   .then(() =>{
    //     alert("Successfully User Logged in")
    //     navigate("/")

    //   })
    //   .catch((error)=>{
    //     alert('An error happened. Please check console');
    //     console.log(error);

    // });
    }
  return (
    
    <div className='h-screen flex justify-center items-center '>
      <div className='bg-white h-[550px] w-[1000px] flex rounded-xl'>
        <div className='h-full w-1/2 rounded-l-xl p-10 pt-[70px] font-Mont'>
          <h1 className='text-[50px]  text-center pb-10 '>
            LOGIN
          </h1>
          <input 
            type="text" 
            placeholder='Email' 
            className='w-[400px] mx-[10px] px-[20px] h-[40px] border-2 rounded-sm mb-[20px]'
            value={email} onChange={(e)=> setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder='Password' 
            className='w-[400px] mx-[10px] px-[20px] h-[40px] border-2 rounded-sm mb-[20px]'
            value={password} onChange={(e)=> setPassword(e.target.value)}
          />
          <NavLink to={"/passwordchange"} >
            <p className="text-right pr-[10px]" >
              Forgot Password ?
            </p>
          </NavLink>
          <button className='text-center bg-yellow-500 w-[350px] h-[50px] mx-[35px] my-6 text-[20px] rounded-full font-medium' 
            onClick={handleUser}>
            Login
          </button>
          <p>
            Dont have an account?
            <NavLink to={"/signup"} className={"font-bold"}>
              Sign Up
            </NavLink>
          </p>
        </div>
        <div className='bg-yellow-500  h-full w-1/2 rounded-r-xl '>
          <img className='pt-[74px] rounded-r-xl'
            src={pug} alt=""
          /> 
        </div>
      </div>
    </div>
  )
}

export default Login