import React from 'react';
import { useProductContext } from '../../context/productContext';
import { createCategoryUrl } from '../../utils/apiUrl';

const CategorySection = () => {
    const { categoryName, setCategoryName } = useProductContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categoryName) {
            alert('Please provide category name');
        }
        try {
            const response = await fetch(createCategoryUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: categoryName }),
            });

            const result = await response.json();
            if (result.success) {
                console.log(result);
                alert(result.message);
            } else {
                alert(result.message);
                // console.log(result);
            }
            setCategoryName('');
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="w-full md:pl-[20%] h-[100vh] bg-gray-900 flex justify-center pt-20 text-base md:text-4xl text-white">
            <form
                className="flex flex-col gap-8  p-4 rounded-md w-[70%] pt-[10%]"
                onSubmit={handleSubmit}
            >
                <h2>Create Category</h2>
                <div className="flex flex-col text-[22px] gap-2">
                    <label htmlFor="name">category name</label>
                    <input
                        type="text"
                        className="text-black py-2 pl-4 rounded outline-none focus:ring"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    value="Create"
                    className="cursor-pointer p-2 self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white w-[20%] text-xl rounded"
                />
            </form>
        </div>
    );
};

export default CategorySection;
