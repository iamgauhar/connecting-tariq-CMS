import React, { useEffect } from 'react';
import { useProductContext } from '../../context/productContext';
import { getCategoryUrl } from '../../utils/apiUrl';

const ProductForm = ({ text }) => {
    const {
        name,
        setName,
        description,
        setDescription,
        price,
        setPrice,
        thumbnails,
        setThumbnails,
        categories,
        setCategories,
        categoryName,
        setCategoryName,
    } = useProductContext();

    const createProduct = async (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('price', price);
        // formData.append('images', thumbnail);
        // formData.append('description', description);
        // formData.append('')
        // console.log(formData);
    };
    // FormData()
    const handleFiles = (e) => {
        const files = e.target.files;
    };
    const fetchCategories = async () => {
        const response = await fetch(getCategoryUrl, {
            method: 'GET',
        });
        const categories = await response.json();
        if (categories.success) {
            console.log(categories);
            setCategories(categories.categories);
        } else {
            alert(categories.message);
        }
    };
    useEffect(() => {
        try {
            fetchCategories();
        } catch (err) {
            console.log(err);
        }
    }, []);
    return (
        <div className="w-full h-[100vh] bg-slate-300 flex justify-center">
            <div className="max-w-[750px]">
                <h1 className=" text-base md:text-3xl font-bold text-gray-700 pt-[100px] px-4 md:px-0">
                    Add your product details here.
                </h1>
                <form
                    className="pt-[50px] max-w-[750px]"
                    onSubmit={createProduct}
                >
                    <div className="flex justify-center items-center flex-col gap-7 p-3 ">
                        <input
                            className="w-full block border-none outline-none px-3 py-2 rounded-md"
                            type="text"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <select
                            className="text-gray-400 w-full block border-none outline-none px-3 py-2 rounded-md"
                            onChange={(e) => setCategoryName(e.target.value)}
                        >
                            <option value="Select Category">
                                Select Category
                            </option>
                            {categories.map((categ) => {
                                return (
                                    <option key={categ._id} value={categ.name}>
                                        {categ.name}
                                    </option>
                                );
                            })}
                        </select>
                        <textarea
                            className="w-full border-none outline-none px-3 py-2 rounded-md"
                            placeholder="Description"
                            rows={6}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                        <input
                            className="w-full border-none outline-none px-3 py-2 rounded-md"
                            type="number"
                            placeholder="Price"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <div className="flex justify-between items-center">
                            <input
                                className="w-full border-none outline-none px-3 py-2 rounded-md"
                                type="file"
                                placeholder="Thumbnail"
                                required
                                name="file"
                                multiple
                                value={thumbnail}
                                onChange={(e) => console.log(e.target.files)}
                            />
                            <label htmlFor="toggle">
                                <b>₹</b>?
                            </label>

                            <label className="relative inline-flex items-center cursor-pointer ml-2">
                                <input
                                    type="checkbox"
                                    value=""
                                    name="toggle"
                                    className="sr-only peer"
                                />
                                <div className="group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-16 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
                            </label>
                        </div>
                    </div>
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-44 py-4 ml-2 mt-5 rounded-xl transition-transform font-semibold hover:bg-black/[0.8] active:scale-90">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
