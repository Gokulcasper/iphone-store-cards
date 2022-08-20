import axios from 'axios';
import React, { useState } from 'react'

const CreateMobile = () => {
    const [mobile, setMobile] = useState({
        name: "",
        descriptions: "",
        image_url: "",
    });

    const createNewMobilePost = async () => {
        await axios.post("http://localhost:5001/mobiles", mobile);
        setMobile({
            name: "",
            description: "",
            image_url: "",
        })
    }
    return (
        <div className='flex flex-col items-center space-y-5 w-full h-full'>
            <div className='flex items-center justify-start gap-x-3'>
                <h3>Name :</h3>
                <input type="text" value={mobile.name} onChange={(e) => {
                    setMobile({ ...mobile, name: e.target.value })
                }} />
            </div>
            <div className='flex items-center justify-start gap-x-3'>
                <h3>Descriptions :</h3>
                <input type="text" value={mobile.description} onChange={(e) => {
                    setMobile({ ...mobile, description: e.target.value })
                }} />
            </div>
            <div className='flex items-center justify-start gap-x-3'>
                <h3>Image Url :</h3>
                <input type="text" value={mobile.image_url} onChange={(e) => {
                    setMobile({ ...mobile, image_url: e.target.value })
                }} />
            </div>
            <button className='px-5 py-2 bg-green-400 rounded-md'
                onClick={() => {
                    createNewMobilePost()
                }
                }
            >Create Mobile</button>
        </div>
    )
}

export default CreateMobile