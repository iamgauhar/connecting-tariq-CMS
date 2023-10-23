import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [categories, setCategories] = useState([]);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnails, setThumbnails] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <ProductContext.Provider
            value={{
                showMenu,
                setShowMenu,
                name,
                setName,
                description,
                setDescription,
                price,
                setPrice,
                thumbnails,
                setThumbnails,
                categoryName,
                setCategoryName,
                categories,
                setCategories,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

const useProductContext = () => useContext(ProductContext);

export { ProductContext, ProductContextProvider, useProductContext };
