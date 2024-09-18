import React from 'react'

function PetCard(pet) {
  return (
    <div className='py-7'>
        <div className='w-3/4 h-auto bg-slate-200 flex rounded-md'>
            <div className='w-1/5 bg-slate-400'>
                <img src="" alt=""  className='w-full h-auto'/>
            </div>
            <div className='w-4/5 p-10 font-Mont'>
                <h1 className='text-[25px] '>{pet.pet.name}</h1>
                <p className='text-[15px] pt-5'>{pet.pet.description}</p>
                <div className='flex gap-[500px]'>
                <p className='text-[30px] pt-5'>{pet.pet.price}</p>
                <p className='text-[15px] pt-10'>Seller : {pet.pet.owner.username}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PetCard