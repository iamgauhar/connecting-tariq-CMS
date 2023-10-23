import React from 'react'
import Header from './Header'
import ProductForm from './ProductForm'

const Popup = ({ text }) => {
    return (
        <div>
            <Header />
            <ProductForm text={text} />
        </div>
    )
}

export default Popup