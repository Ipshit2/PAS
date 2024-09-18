import React, { useEffect, useState } from 'react'
import axios from "axios"
import PetCard from '../components/PetCard.jsx'


function AllPets() {
    const [pets, setPets] = useState([])
    useEffect(()=>{
        const fetchpets = async ()=>{
            try {
                const response =await axios.get("http://localhost:8080/pet/allpet", {
                    withCredentials: true,
                })
                setPets(response.data.data)
                console.log(response.data.data)
                
            } catch (error) {
                alert("error happened")
                
            }
        }
        fetchpets()

    },[])
  return (
    <div className='flex pt-[110px] '>
        <div className='w-1/5 h-auto py-2'></div>
        <div className='w-4/5 '>
        {pets.length>0 ?
        (pets.map((pet) =>( <PetCard
             key={pet._id} pet={pet} />)))
        :
        (<h1 className='font-Mont text-[20px] pt-2'>No pet for sale</h1>)}
        </div>
    </div>
  )
}

export default AllPets