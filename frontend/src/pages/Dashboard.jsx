import React, { useEffect, useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'
import OwnerpetCard from '../components/OwnerpetCard'
import toast from 'react-hot-toast'
function Dashboard() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
    })
    const [formData, setFormData] = useState({ ...user })
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await axios.get('http://localhost:8080/user/dashboard', {
                    withCredentials: true,
                });
                const userData = response.data.data
                setUser({
                    username: userData.username || '',
                    email: userData.email || '',
                    phone: userData.phone || 'Enter Your Phone',
                    address: userData.address || 'Enter Your Address',
                    city: userData.city || 'Enter Your City',
                    state: userData.state || 'Enter Your State',
                    pincode: userData.pincode || 'Enter Pincode',
                    
                })
                setFormData({
                    username: userData.username || '',
                    email: userData.email || '',
                    phone: userData.phone || '',
                    address: userData.address ||  '',
                    city: userData.city || '',
                    state: userData.state || '',
                    pincode: userData.pincode || '',
                })

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchData()
    },[])

    const [edit, setEdit] =  useState(false)

    const HandleEdit = async() =>{
        setEdit(true)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
        ...formData,
        [name]: value,
    })
    }
    const HandleSubmit = async()=>{
        
        try {
            console.log('Form Data:', formData)
            const response = await axios.put('http://localhost:8080/user/dashboard', formData, {
                withCredentials: true,
            })
            setUser(response.data.data)
            toast.success("Successfully data entered")
            setEdit(false)
        } catch (error) {
            toast.error("Error Happened")
            console.error('Error saving user data:', error)
        }
    }

    const capitalizedUsername = user.username
        ? user.username[0].toUpperCase() + user.username.slice(1)
        : ''

    const [pets, setPets] = useState([])

    useEffect(()=>{
        const fetchpets = async ()=>{
            try {
                const response =await axios.get("http://localhost:8080/pet/getmypet", {
                    withCredentials: true,
                })
                setPets(response.data.data)
                console.log(response.data.data)
                
            } catch (error) {
                toast.error("error happened")
                
            }
        }
        fetchpets()

    },[])

    return (
        <>
            <div className='h-auto px-[50px]  pt-[110px]'>
                <div>
                    <div className='flex pb-10 border-b-2 border-gray-300'>
                        <div className='bg-gray-300 w-[230px] h-[230px] rounded-full'>
                        
                
                        </div>
                        <div className='flex px-7 mt-[100px] gap-6 '>
                            <h1 className=' font-Mont font-semibold text-[60px] mt-[15px] '>Welcome Back, </h1>
                            <h1 className=' font-Mont font-medium text-[50px] mt-[25px]'>{capitalizedUsername}!</h1>
                        </div>
                    </div>
                    <div className='flex py-9 border-b-2 border-gray-300'>
                        <div className='w-1/3'>
                            <h1 className='font-Mont text-[30px] font-semibold'>Public Profile</h1>
                            <p className='text-[17px]'>This while be displayed to everyone</p>
                        </div>
       
                        <div className='grid grid-cols-1 w-2/3' >
                        <div className='flex'> 
                                <h1 
                            className='mb-3 pt-2 h-[40px] font-bold pl-2 rounded-md font-Mont  w-[150px]'>
                                Name :</h1>
                                <h1 
                            className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont bg-gray-300  w-[400px]'>
                                {capitalizedUsername}</h1>
                                
                            </div>
                            <div className='flex'> 
                                <h1 
                            className='mb-3 pt-2 h-[40px] font-bold pl-2 rounded-md font-Mont  w-[150px]'>
                                Email :</h1>
                                <h1 
                            className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont bg-gray-300  w-[400px]'>
                                {user.email}</h1>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex py-9 border-b-2 border-gray-300'>
                        <div className='w-1/3'>
                            <h1 className='font-Mont text-[30px] font-semibold'>Personal Details</h1>
                        </div>
                        <div className='grid grid-cols-1 w-2/3' >
                            <div className='flex'> 
                                <h1 
                            className='mb-3 pt-2 h-[40px] font-bold pl-2 rounded-md font-Mont  w-[150px]'>
                                Phone No. :</h1>
                                
                                    {edit?
                                    <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont bg-gray-100 w-[400px] border-2'/>
        
                                    :
                                    <h1 
                                className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont bg-gray-300  w-[400px]'>
                                    {user.phone}</h1>}
                                
                            </div>
                            <div className='flex'> 
                                <h1 
                            className='mb-3 pt-2 h-[80px] font-bold pl-2 rounded-md font-Mont  w-[150px]'>
                                Address :</h1>
                                
                                {edit?
                                    <textarea
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className='mb-3 pt-2 h-[80px] pl-2 rounded-md font-Mont bg-gray-100 w-[400px] border-2 resize-none'/>
        
                                    :
                                    <h1 
                                className='mb-3 pt-2 h-[80px] pl-2 rounded-md font-Mont bg-gray-300  w-[400px]'>
                                    {user.address}</h1>}
                                
                            </div>
                            
                            <div className='flex'> 
                                <h1 
                            className='mb-3 pt-2 h-[40px] font-bold pl-2 rounded-md font-Mont  w-[150px]'>
                                City :</h1>
                                {edit?
                                    <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont bg-gray-100 w-[400px] border-2'/>
        
                                    :
                                    <h1 
                                className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont bg-gray-300  w-[400px]'>
                                    {user.city}</h1>}
                                
                            </div>
                            <div className='flex'> 
                                <h1 
                            className='mb-3 pt-2 h-[40px] font-bold pl-2 rounded-md font-Mont  w-[150px]'>
                                State :</h1>
                                {edit?
                                    <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont bg-gray-100 w-[400px] border-2'/>
        
                                    :
                                    <h1 
                                className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont bg-gray-300  w-[400px]'>
                                    {user.state}</h1>}
                                
                            </div>
                            <div className='flex'> 
                                <h1 
                            className='mb-3 pt-2 h-[40px] font-bold pl-2 rounded-md font-Mont  w-[150px]'>
                                Pincode :</h1>
                                {edit?
                                    <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                    className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont bg-gray-100 w-[400px] border-2'/>
        
                                    :
                                    <h1 
                                className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont bg-gray-300  w-[400px]'>
                                    {user.pincode}</h1>}
                                    
                                <button onClick={edit ? HandleSubmit : HandleEdit} className= ' mx-20 h-[40px] w-[130px] text-[20px] text-white bg-black px-6 py-1 rounded-md border-black ' >
                                    {edit ? 'Save' : 'Edit'}
                                </button>

                            </div>
                            <div className='flex'>
                                <h1 className='mb-3 pt-2 h-[40px] font-bold pl-2 rounded-md font-Mont  w-[150px]'>
                                Enter your Role:
                                </h1>
                                <div>

                                </div>
                            </div>
                            
                        </div>
                    </div>  
                    <div className='flex py-9 border-b-2 border-gray-300'>
                        <div className='w-1/5'>
                            <h1 className='font-Mont text-[30px] font-semibold'>Your Pets:</h1>
                            <NavLink to="/petregister" ><button className='font-Mont text-[20px] w-[150px]'> Add</button></NavLink>
                            
                        </div>
                        <div className='grid grid-cols-3 gap-10'>
                                {pets.length>0 ?
                                (pets.map((pet) =>( <OwnerpetCard key={pet._id} pet={pet} />)))
                                :
                                (<h1 className='font-Mont text-[20px] pt-2'>No pet for sale</h1>)}
                        </div>
                        
                        
                    </div>
                    
                    
                    

                </div>
            </div>
        </>
    )    

    
}

export default Dashboard