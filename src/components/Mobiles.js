import axios from 'axios'
import React from 'react'

const Mobiles = ({ mobileDetails }) => {

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5001/mobiles/${id}`);

    }
    const handleEdit = async (id) => {
        console.log("edited successfully");
    }
    return (
        <div className='flex items-center justify-start w-full'>
            <div className='flex flex-col p-3 bg-white min-h-max w-25 gap-5 '>
                <div>
                    <img src={mobileDetails.image_url} alt="mobile image" />
                </div>
                <h3 className='text-red-600 text-3xl'>{mobileDetails.name}</h3>
                <p>{mobileDetails.description}</p>
                <div>
                    <button className='px-4 py-2 bg-green-300 rounded-sm'
                        onClick={() => {
                            handleEdit(mobileDetails._id);
                        }}
                    >Edit</button>
                    <button className='px-4 py-2 bg-red-700 rounded-sm'
                        onClick={() => {
                            handleDelete(mobileDetails._id);
                        }}
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Mobiles
