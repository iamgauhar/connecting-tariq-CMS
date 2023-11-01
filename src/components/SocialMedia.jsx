import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { instaLink, uploadLink, youtubeLink } from '../../utils/apiUrl'
import { useProductContext } from '../../context/productContext'
import { ToastContainer, toast } from 'react-toastify'
import Loader from './Loader'

const SocialMedia = () => {


    const toastOptions = {
        position: 'bottom-right',
        autoClose: 3000,
        pauseOnHover: true,
        theme: 'colored',
        draggable: true,
    };

    const { loading, setLoading } = useProductContext();
    const [link, setLink] = useState("")
    const [url, setUrl] = useState([])

    const getUrls = async () => {
        try {

            const insta = await fetch(instaLink)
            const instaResult = await insta.json()
            // setUrl(instaResult.response)

            const yt = await fetch(youtubeLink)
            const ytResult = await yt.json()
            const newArr = [...instaResult.response, ...ytResult.response]
            setUrl(newArr)

            // console.log(url)

        } catch (err) {
            toast.error("Somthing went wrong", toastOptions)
        }
    }

    useEffect(() => {
        getUrls()
    }, [])

    const uploadSocialLink = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch(uploadLink, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({ link: link })
            })
            const data = await response.json()
            if (data.success) {
                setLink("")
                setLoading(false)
                toast.success("Link upload successful", toastOptions)
            }
        } catch (err) {
            toast.error("Somthing went wrong!", toastOptions)
        }

    }
    return (
        <div className='w-full'>
            <Header />
            <div className='flex absolute w-full'>
                <Sidebar />
                <div className='w-full min-h-screen  absolute right-0 pt-[100px] md:w-4/5'>
                    <h1 className='text-4xl font-semibold text-center'>Upload Social media links</h1>
                    <div className=' w-full bg-slate-100 flex flex-col gap-2 p-8 mt-4 items-center'>
                        <input onChange={(e) => {
                            setLink(e.target.value)
                        }} type="url" placeholder="Add your Youtube, Instagram or X links" className='w-4/5 h-10 rounded-md border border-gray-400 outline-gray-400 hover:outline-rose-500 pl-4 text-xl' />
                        <button onClick={uploadSocialLink} type='submit' className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-44 py-4 ml-2 mt-5 rounded-xl transition-transform font-semibold hover:bg-gradient-to-r hover:from-lime-500 hover:via-orange-500 hover:to-yellow-500 hover:duration-500 active:scale-90">
                            Upload Link
                        </button>
                    </div>
                    <div className='p-8 '>

                        {
                            url.map((item) => {
                                return (
                                    <div key={item._id} className='border bg-red-500 text-white p-4 hover:bg-rose-500 my-2 mb-2 rounded-md'>
                                        <a href={item.link} target="_blank" rel='noreferrer' className='flex items-center justify-between'>
                                            <div>
                                                {item.link}
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-white'><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div >
            {loading && <Loader />}
            <ToastContainer />
        </div >
    )
}

export default SocialMedia