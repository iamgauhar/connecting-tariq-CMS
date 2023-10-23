import React from "react";
import { useProductContext } from "../../context/productContext";

const ProductForm = ({ text }) => {
  const {
    name,
    setName,
    description,
    setDescription,
    price,
    setPrice,
    thumbnail,
    setThumbnail,
  } = useProductContext();
  return (
    <div className="w-full h-[100vh] bg-slate-300 flex justify-center">
      <div className="max-w-[750px]">
        <h1 className=" text-base md:text-3xl font-bold text-gray-700 pt-[100px] px-4 md:px-0">
          Add your product details here.
        </h1>
        <form
          className="pt-[50px] max-w-[750px]"
          onSubmit={(e) => e.preventDefault()}
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
                onChange={(e) => setThumbnail(e.target.value)}
              />
              <label htmlFor="toggle"><b>₹</b>?</label>

              <label className="relative inline-flex items-center cursor-pointer ml-2">
                <input type="checkbox" value="" name="toggle" className="sr-only peer" />
                <div className="group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-16 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0">
                </div>
              </label>
            </div>
          </div>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-44 py-4 ml-2 mt-5 rounded-xl transition-transform font-semibold hover:bg-black/[0.8] active:scale-90">
            {text}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
