import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
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
        thumbnail,
        setThumbnail,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductContext, ProductContextProvider, useProductContext };
