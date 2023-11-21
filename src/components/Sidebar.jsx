import React, { useEffect } from 'react';
import { useLoginContext } from '../../context/loginContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { useProductContext } from '../../context/productContext';

const Sidebar = () => {
    const { showMenu, setShowMenu } = useProductContext();
    const { user, setUser } = useLoginContext();
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        // console.log(token)
        if (!token) {
            navigate('/login');
        }
    }, []);
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };
    // console.log(user);
    return (
        <div
            className={`${showMenu ? 'block' : 'hidden'
                } md:block w-1/5 h-[100vh] bg-gray-800 fixed top-0 left-0 text-white transition-all`}
        >
            <ul className="w-full flex flex-col justify-center gap-5 text-base text-white pt-[100px] pl-5 z-10 transition-all">
                <li className="hover:font-semibold">
                    <NavLink to="/" onClick={() => setShowMenu(false)}>
                        Dashboard
                    </NavLink>
                </li>
                <li className="hover:font-semibold">
                    <NavLink to="/listoffer" onClick={() => setShowMenu(false)}>
                        List Offer
                    </NavLink>
                </li>
                <li className="hover:font-semibold">
                    <NavLink
                        to="/addProduct"
                        onClick={() => setShowMenu(false)}
                    >
                        Add Product
                    </NavLink>
                </li>
                <li className="hover:font-semibold">
                    <NavLink
                        to="/manageProducts"
                        onClick={() => setShowMenu(false)}
                    >
                        Manage Products
                    </NavLink>
                </li>
                <li className="hover:font-semibold">
                    <NavLink
                        to="/category"
                        className="category"
                        onClick={() => setShowMenu(false)}
                    >
                        Category
                    </NavLink>
                </li>
                <li className="hover:font-semibold">
                    <NavLink
                        to="/customers"
                        className="category"
                        onClick={() => setShowMenu(false)}
                    >
                        Customers photo
                    </NavLink>
                </li>
                <li className="hover:font-semibold">
                    <NavLink
                        to="/socialmedia"
                        className="category"
                        onClick={() => setShowMenu(false)}
                    >
                        YouTube links
                    </NavLink>
                </li>

                <li className="hover:font-semibold" onClick={logout}>
                    <NavLink>Logout</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
