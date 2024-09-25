import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../page/Login';
import Logout from '../page/Logout.jsx';
import { UserContext } from '../context/AuthProvider';
import { useSelector } from 'react-redux'


const Header = () => {
    const [authUser] = useContext(UserContext);
     
    const [sticky, setSticky] = useState(false);

    const item = useSelector(state => state.cart.items);


    // Sticky navbar logic
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItem = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </>
    );

    return (
        <div
            className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out" : ""}`}
        >
            <div className="navbar bg-base-100">
                {/* Navbar start */}
                <div className="navbar-start">
                    {/* Mobile view dropdown */}
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 bg-base-100 p-2 shadow rounded-box">
                            {navItem}
                        </ul>
                    </div>
                    {/* Logo */}
                    <Link  className="btn btn-ghost normal-case text-xl cursor-pointer">NovelExplore</Link>
                </div>

                {/* Centered navbar for large screens */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>

                {/* Navbar end with search and login/signup */}
                <div className="navbar-end flex items-center">
                    {/* Search bar for larger screens */}
                    <div className='hidden md:flex items-center mr-2'>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    
                    <span>Cart Item:.{item.length}</span>

                    {/* Login Button */}
                    {
                        authUser? (<Logout />) :(
                        <div className="flex items-center space-x-4">
                        <button
                            onClick={() => document.getElementById('my_modal_3').showModal()}
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</button>
                    </div>
                        )
                    }

                    <Login />
                </div>
            </div>
        </div>
    );
};

export default Header;
