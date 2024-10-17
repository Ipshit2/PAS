import React from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
function OwnerpetCard(pet) {

  const HandleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/pet/${pet.pet._id}`, {
        withCredentials: true,
      })
      setTimeout(() => {
        window.location.reload();
      }, 2000)
      toast.success("pet Removed")
      
    } catch (error) {
      console.error('Error deleting pet:', error);
      toast.error('Error deleting pet');
    }
  }

  
  return (
    <div >
        <div className='bg-slate-500 rounded-md w-[250px] h-auto p-5 '>
          <img src="" alt=""  className='w-full h-[120px]'/>
          <div className='grid grid-cols-2 '>
            <h1>Name : </h1>
            <h1>{pet.pet.name}</h1>
            <h1>Category : </h1>
            <h1>{pet.pet.category}</h1>
            <h1>Price (in Rs.) :</h1>
            <h1>{pet.pet.price}</h1>
            <button onClick={HandleDelete}>Delete</button>
          </div>


        </div>
    </div>
  )
}

export default OwnerpetCard