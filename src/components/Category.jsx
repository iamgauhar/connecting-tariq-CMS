import React from 'react'
import CategorySection from './CategorySection'
import Header from './Header'
import Sidebar from './Sidebar'

const Category = () => {
  return (
    <div className='h-cal-[100vh-60px]'>
    <Header/>
   <div className='flex'>
   <Sidebar/>
    <CategorySection/>
   </div>
   {/* <ProductForm/> */}
</div>
  )
}

export default Category