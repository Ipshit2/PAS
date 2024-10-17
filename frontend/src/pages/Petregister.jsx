import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';
function Petregister() {

  const [pet, setPet] = useState({
    name: '',
    category: '',
    sex: '',
    age: '',
    description: '',
    price: '',
  })
  const handleChange = (e) => {
    setPet({
      ...pet,
      [e.target.name]: e.target.value
    })
  }
  const HandlePet = async() =>{
    try {
      const response = await axios.post('http://localhost:8080/pet/create', pet, {
        withCredentials: true,
      })

      if (response.status === 201) {
        toast.success('Pet registered successfully!');
        setPet({ name: '', category: '', sex: '', age: '', description: '', price: '' })
      }
    } catch (error) {
      
      toast.error('Failed to register the pet. Please try again.')
      console.log(error)
    }
  }


  return (
    <>
    <div className='h-auto  pt-[110px] pl-[400px] '>
      <h1 className='py-[30px] text-[50px] font-Mont pl-[105px]'>ENTER YOUR PET</h1>
      <div className='flex py-[15px] text-[22px] font-Mont  '>
        <h1 className='w-[250px]'>Enter Name:</h1>
        <input 
        type="text" 
        name="name" 
        value={pet.name}
        onChange={handleChange} 
        className='mb-3 h-[40px] pl-2 rounded-md font-Mont bg-gray-300 w-[400px] border-2'/>
      </div>
      <div className='flex  py-[15px] text-[22px] font-Mont '>
        <h1 className='w-[250px]'>Enter Category:</h1>
        <input 
        type="text"
        name="category" 
        value={pet.category}
        onChange={handleChange} 
        className='mb-3  h-[40px] pl-2 rounded-md font-Mont bg-gray-300 w-[400px] border-2'/>
      </div>
      <div className='flex  py-[15px] text-[22px] font-Mont '>
        <h1 className='w-[250px]'>Enter Sex:</h1>
        <input 
        type="text"  
        name="sex" 
        value={pet.sex}
        onChange={handleChange}
        className=' mb-3  h-[40px] pl-2 rounded-md font-Mont bg-gray-300 w-[400px] border-2'/>
      </div>
      <div className='flex  py-[15px] text-[22px] font-Mont '>
        <h1 className='w-[250px]'>Enter Age:</h1>
        <input 
        type="number"  
        name="age" 
        value={pet.age}
        onChange={handleChange}
        className=' mb-3  h-[40px] pl-2 rounded-md font-Mont bg-gray-300 w-[400px] border-2'/>
      </div>
      <div className='flex  py-[15px] text-[22px] font-Mont '>
        <h1 className='w-[250px]'>Enter Description:</h1>
        <textarea
        type="text"
        name="description" 
        value={pet.description}
        onChange={handleChange}  
        className='resize-none mb-3 h-[100px] pl-2 rounded-md font-Mont bg-gray-300 w-[400px] border-2'/>
      </div>
      <div className='flex  py-[15px] text-[22px] font-Mont '>
        <h1 className='w-[250px]'>Enter Price:</h1>
        <input 
        type="number"  
        name="price" 
        value={pet.price}
        onChange={handleChange}
        className=' mb-3  h-[40px] pl-2 rounded-md font-Mont bg-gray-300 w-[400px] border-2'/>
      </div>
      <div>
        <button className='text-[20px] ' onClick={HandlePet}>Submit</button>
      </div>
      

        
    </div>
    </>
  )
}

export default Petregister