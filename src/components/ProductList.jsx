import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Popup from './Popup';
import { productList } from '../../utils/apiUrl';
import { useProductContext } from '../../context/productContext';
import List from './List';

const ProductList = () => {
    const { products, setProducts } = useProductContext();
    const allProduct = async () => {
        const allProductList = await fetch(productList, {
            method: 'GET',
        });

        // console.log(await allProductList.json());
        const response = await allProductList.json();
        setProducts(response.products);
        console.log(response.products);
    };

    useEffect(() => {
        try {
            allProduct();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className="md:w-4/5 w-full min-h-screen absolute right-0 p-4 pt-20  bg-slate-100">
            <h1 className="text-2xl font-bold">Manage your products.</h1>

            <div className="flex gap-8 bg-slate-300 p-8 mt-4 items-center">
                <label htmlFor="search">Search :</label>
                <input
                    type="text"
                    className="py-3 px-4 block w-1/3  border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Search input"
                    name="search"
                />

                <label htmlFor="select">Filter :</label>
                <select
                    className="py-3 px-4 pr-9 block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                    name="select"
                >
                    <option selected>Open this select menu</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>

            <div className="bg-slate-800 p-4">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-ydivide-gray-700">
                                    <thead>
                                        <tr className="">
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-white uppercase"
                                            >
                                                Image
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-white uppercase"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-white uppercase"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-white  uppercase"
                                            >
                                                Hidden/Visible
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-right text-xs font-medium text-white uppercase"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {products.map((item) => {
                                            return (
                                                <List
                                                    item={item}
                                                    key={item._id}
                                                />
                                            );
                                        })}
                                        {/* <tr className="bg-slate-900">
                                            <td className="px-4 py-2 whitespace-nowrap text-sm font-medium  text-gray-200">
                                                <div className="h-16 w-12">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=2596&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="img"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                                                John Brown
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                                &#x20b9; <span>499</span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                                <div className="bg-red-500 px-2 rounded-xl w-16">
                                                    Visible
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a
                                                    className="text-blue-500 hover:text-blue-700"
                                                    href="#"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    className="text-red-500 hover:text-red-700 pl-3"
                                                    href="#"
                                                >
                                                    Delete
                                                </a>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
