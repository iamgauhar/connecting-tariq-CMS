import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

import ProductList from './ProductList'

const ManageProducts = () => {
    return (
        <div className='w-full'>
            <Header />
            <div className='flex justify-between w-full'>
                <Sidebar />
                <ProductList />
            </div>
            {/* <ProductForm/> */}
        </div>
        // <ProductList />
    )
}

export default ManageProducts