import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ProductForm from './ProductForm'

const AddProduct = () => {
  return (
    <div className='bg-[#1d2634] h-cal-[100vh-60px]'>
      <Header />
      <div className='flex'>
        <Sidebar />
        <ProductForm text="Update Product" />
      </div>
      {/* <ProductForm/> */}
    </div>
  )
}

export default AddProduct