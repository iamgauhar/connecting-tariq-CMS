import React from 'react';
import { NavLink } from 'react-router-dom';
import { deleteProduct } from '../../utils/apiUrl';
import { useProductContext } from '../../context/productContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = ({ item }) => {
    const { _id, name, price, isPriceVisible, images } = item;
    const { products, setProducts } = useProductContext();

    const toastOptions = {
        position: 'bottom-right',
        autoClose: 5000,
        pauseOnHover: true,
        theme: 'colored',
        draggable: true,
    };
    const deleteItem = async () => {
        const response = await fetch(`${deleteProduct}/${_id}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        if (result.success) {
            let updatedProducts = products.filter(
                (product) => product._id !== _id
            );
            setProducts(updatedProducts);
            toast.success(result.message, toastOptions);
        } else {
            toast.error(result.message, toastOptions);
            console.log(result);
        }
    };
    return (
        <tr id={_id} className="bg-slate-900">
            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium  text-gray-200">
                <div className="h-16 w-12">
                    <img
                        src={images[0]}
                        alt="img"
                        className="w-full h-full object-cover"
                    />
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                {name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                &#x20b9; <span>{price}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                <div
                    className={`px-2 rounded-xl w-16 ${
                        isPriceVisible ? 'bg-lime-500' : 'bg-red-500'
                    }`}
                >
                    {isPriceVisible ? 'Visible' : 'Hidden'}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <NavLink
                    to="/editProduct"
                    className="text-blue-500 hover:text-blue-700"
                    href="#"
                >
                    Edit
                </NavLink>
                <a
                    onClick={(e) => {
                        deleteItem(e);
                    }}
                    className="text-red-500 hover:text-red-700 pl-3"
                    href="#"
                >
                    Delete
                </a>
            </td>
            <ToastContainer />
        </tr>
    );
};

export default List;
