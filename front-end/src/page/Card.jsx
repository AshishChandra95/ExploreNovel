import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <div className="h-[280px] w-[250px] text-center">
            <img src={item.image} alt="not Show" className="h-[200px] mx-auto" />
            <div className="flex justify-center items-center my-2">
                <h1>{item.name}</h1>
            </div>
            <Link to="/books" className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600">
                Buy Now
            </Link>
        </div>
    );
};

export default Card;
