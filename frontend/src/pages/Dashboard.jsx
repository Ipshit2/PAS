import React, { useEffect, useState } from 'react'

function Dashboard() {

    const [edit, setEdit] = useState(true)  
    function change(){
        setEdit(!edit)
        console.log(edit)
    }
    
  return (
    <>
        <div className='h-[1000px] px-[50px]  pt-[110px]'>
            <div>
                <div className='flex pb-10 border-b-2 border-gray-300'>
                    <div className='bg-gray-300 w-[230px] h-[230px] rounded-full'>
            
                    </div>
                    <div className='flex px-7 mt-[100px] gap-6 '>
                        <h1 className=' font-Mont font-semibold text-[60px] mt-[15px] '>Welcome Back, </h1>
                        <h1 className=' font-Mont font-medium text-[50px] mt-[25px]'> Ipshit Haste !</h1>
                    </div>
                </div>
                <div className='flex py-9 border-b-2 border-gray-300'>
                    <div className='w-1/3'>
                        <h1 className='font-Mont text-[30px] font-semibold'>Public Profile</h1>
                        <p className='text-[17px]'>This while be displayed to everyone</p>
                    </div>
                    <div className='grid grid-cols-1 w-2/3' >
                        <input 
                            type="text" 
                            placeholder='Username' 
                            className='mb-3 h-[40px] pl-2 rounded-md  border-2 border-gray-300 w-[450px]' />
                        <input 
                            type="text" 
                            placeholder='Email' 
                            className='mb-3 h-[40px] pl-2 rounded-md  border-2 border-gray-300 w-[450px]' />
                    </div>
                </div>
                <div className='flex py-9 '>
                    <div className='w-1/3'>
                        <h1 className='font-Mont text-[30px] font-semibold'>Personal Details</h1>
                    </div>
                    {
                        edit ? <div className='grid grid-cols-1 w-2/3' >
                            <h1 
                            className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont  w-[450px]'>
                                Apartment,name, building, unit, floor, etc.</h1>
                                <h1 
                            className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont  w-[450px]'>
                                Street, company name</h1>
                                <h1 
                            className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont  w-[450px]'>
                                City</h1>
                                <h1 
                            className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont  w-[450px]'>
                                State/ Province/ Region</h1>
                                <h1 
                            className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont  w-[450px]'>
                                Pincode</h1>
                                <h1 
                            className='mb-3 pt-2 h-[40px] pl-2 rounded-md font-Mont  w-[450px]'>
                                Phone No</h1>
                        
                        <button onClick={change}
                        className=' w-[150px] h-[50px] text-[15px] font-Mont bg-black text-white px-4  rounded-lg border-black '>
                            Edit 
                        </button>
                    </div> :
                    <div className='grid grid-cols-1 w-2/3' >
                    <input 
                        type="text" 
                        placeholder='Apartment,name, building, unit, floor, etc.' 
                        className='mb-3 h-[40px] pl-2 rounded-md  border-2 border-gray-300 w-[450px]' />
                    <input 
                        type="text" 
                        placeholder='Street, company name' 
                        className='mb-3 h-[40px] pl-2 rounded-md  border-2 border-gray-300 w-[450px]' />
                    <input 
                        type="text" 
                        placeholder='City' 
                        className='mb-3 h-[40px] pl-2 rounded-md  border-2 border-gray-300 w-[450px]' /> 
                    <input 
                        type="text" 
                        placeholder='State/ Province/ Region' 
                        className='mb-3 h-[40px] pl-2 rounded-md  border-2 border-gray-300 w-[450px]' />
                    <input 
                        type="number" 
                        placeholder='Pincode' 
                        className='mb-3 h-[40px] pl-2 rounded-md  border-2 border-gray-300 w-[450px]' />
                    <input 
                        type="number" 
                        placeholder='Phone no.' 
                        className='mb-3 h-[40px] pl-2 rounded-md  border-2 border-gray-300 w-[450px]' />
                    <button onClick={change} 
                     className=' w-[150px] h-[50px] text-[15px] font-Mont bg-black text-white px-4  rounded-lg border-black '>
                        Save Changes
                    </button>
                </div>

                    }
                    
                </div>  
            </div>
        </div>
    </>
  )
}

export default Dashboard