import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const SocialMedia = () => {
    return (
        <div className='w-full'>
            <Header />
            <div className='flex absolute w-full'>
                <Sidebar />
                <div className='w-full min-h-screen  absolute right-0 pt-[70px] md:w-4/5'>
                    <h1 className='text-4xl font-semibold text-center'>Upload Social media links</h1>
                    <div className=' w-full bg-slate-100 flex flex-col gap-2 p-8 mt-4 items-center'>
                        <input onChange={(e) => {
                            // setName(e.target.value)
                        }} type="url" placeholder="Social media link" className='w-4/5 h-10 rounded-md border border-gray-400 outline-gray-400 hover:outline-rose-500 pl-4 text-xl' />
                        <button type='submit' className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-44 py-4 ml-2 mt-5 rounded-xl transition-transform font-semibold hover:bg-gradient-to-r hover:from-lime-500 hover:via-orange-500 hover:to-yellow-500 hover:duration-500 active:scale-90">
                            Upload Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia