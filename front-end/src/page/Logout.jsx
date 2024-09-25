import React, { useContext } from 'react'
import { UserContext } from '../context/AuthProvider'
import toast from 'react-hot-toast'
import {useLocation, useNavigate } from 'react-router-dom';


const Logout = () => {
    const location = useLocation();
    const navigation =  useNavigate();
    const from = location.state?.from?.pathname || "/";

    const [authUser, setAuthUser] = useContext(UserContext)
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                users: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully!!")
            setTimeout(() => {
                window.location.reload();
                navigation(from ,{replace : true});
            }, 2000);
        } catch (error) {
            toast.error("Logout Failed:", error)
            setTimeout(() => { }, 2000);

        }
    }
    return (
        <div>
            <button onClick={handleLogout} className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Logout</button>
        </div>
    )
}

export default Logout