import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        try {
            // Send POST request to login
            const response = await axios.post("https://explorenovel.onrender.com/users/login", userInfo);
            
            if (response.data) {
                toast.success("Login Successfully");
                console.log(response.data);
                
                setTimeout(()=>{
                    document.getElementById("my_modal_3").close()
                    localStorage.setItem("Users", JSON.stringify(response.data.users));
                    window.location.reload();
                },2000)
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                toast.error(`Login Failed: ${error.response.data.message}`);
                setTimeout(() => {}, 2000);
            } else {
                console.error(error);
                toast.error("An unknown error occurred. Please try again later.");
            }
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">Log in</h3>

                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="flex justify-around mt-6">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Login
                            </button>
                            <p>
                                Not registered?{" "}
                                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default Login;
