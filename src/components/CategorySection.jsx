import React from 'react';

const CategorySection = () => {
    return (
        <div className="w-full pl-[20%] h-[100vh] bg-gray-900 flex justify-center pt-20 text-base md:text-4xl text-white">
            <form className="flex flex-col gap-8  p-4 rounded-md w-[70%] pt-[10%]">
                <h2>Create Category</h2>
                <div className="flex flex-col text-[22px] gap-2">
                    <label htmlFor="name">category name</label>
                    <input
                        type="text"
                        className="text-black py-2 pl-4 rounded outline-none focus:ring"
                    />
                </div>
                <input
                    type="submit"
                    value="Create"
                    className="cursor-pointer p-2 self-center bg-white text-black w-[20%] text-xl rounded"
                />
            </form>
        </div>
    );
};

export default CategorySection;
