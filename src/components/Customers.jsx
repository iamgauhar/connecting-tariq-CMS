import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify';

import { uploadCustomer } from '../../utils/apiUrl'
import Loader from './Loader'
import { useProductContext } from '../../context/productContext'

const Customers = () => {


    const toastOptions = {
        position: 'bottom-right',
        autoClose: 3000,
        pauseOnHover: true,
        theme: 'colored',
        draggable: true,
    };

    const [name, setName] = useState("")
    const [file, setFile] = useState(null)
    const { loading, setLoading } = useProductContext();

    const uploadPicture = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()

        formData.append('name', name)
        formData.append('images', file)

        const response = await fetch(uploadCustomer, {
            method: "POST",
            body: formData,
        })

        const res = await response.json()
        if (res.success) {
            console.log(res)
            setLoading(false)
            toast.success("Uploaded successful", toastOptions)
            setTimeout(() => {
                location.reload()
            }, 3000)

        } else {
            toast.error("Somthing went wrong!", toastOptions)
        }

    }



    return (

        <div className='w-full'>
            <Header />
            <div className='flex absolute w-full'>
                <Sidebar />
                <div className='w-full min-h-screen  absolute right-0 flex flex-col items-center justify-center gap-8 md:w-4/5'>
                    <h1 className='text-4xl font-semibold'>Upload customer's picture </h1>
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" placeholder="Customer's Name" className='w-4/5 h-10 rounded-md border border-gray-400 outline-gray-400 hover:outline-rose-500 pl-4 text-xl' />
                    <div className="flex items-center justify-center w-4/5 ">

                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-rose-500">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input onChange={(e) => {
                                setFile(e.target.files[0])

                            }} id="dropzone-file" type="file" className="hidden" />
                            <p>{file ? file.name : ""}</p>
                        </label>
                    </div>
                    <button type='submit' onClick={uploadPicture} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-44 py-4 ml-2 mt-5 rounded-xl transition-transform font-semibold hover:bg-gradient-to-r hover:from-lime-500 hover:via-orange-500 hover:to-yellow-500 hover:duration-500 active:scale-90">
                        Upload picture
                    </button>
                </div>
            </div>
            {loading && <Loader />}
            <ToastContainer />
        </div>
    )
}



export default Customers