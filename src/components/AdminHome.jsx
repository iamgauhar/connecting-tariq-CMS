import React from 'react'

const AdminHome = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center flex-wrap pt-[100px] gap-5 ml-6 bg-gray-900'>
      <div className='w-[200px] h-[200px] bg-green-300 text-black text-2xl cursor-pointer text-center leading-[200px] rounded-xl font-semibold'>Analytics</div>
      <div className='w-[200px] h-[200px] bg-violet-400 text-white text-2xl cursor-pointer text-center leading-[200px] rounded-xl font-semibold'>Total Products</div>
      <div className='w-[200px] h-[200px] bg-pink-400 text-white text-2xl cursor-pointer text-center leading-[200px] rounded-xl font-semibold'>Notify</div>
      <div className='w-[200px] h-[200px] bg-blue-400 text-white text-2xl cursor-pointer text-center leading-[200px] rounded-xl font-semibold'>Chart</div>
    </div>
  )
}

export default AdminHome