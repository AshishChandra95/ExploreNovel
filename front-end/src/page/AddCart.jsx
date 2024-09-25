import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';

const AddCart = () => {
  const dispatch = useDispatch();
  const item = useSelector(state => state.cart.items);

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="w-full">
      <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-green-700 text-center my-20">
        Your Cart Item : {item.length}
      </h1>
      {Array.isArray(item) && item.length > 0 ? (
        item.map((item) => (
          <div key={item.id} className="p-10 my-12 flex justify-around items-center border-4 border-white/50 rounded-lg shadow-lg">

            <img className="h-40" src={item.image} alt="" />
            <h4>{item.name}</h4>
            <h4>Price: {item.price}</h4>
            <h4>Quantity: {item.quantity}</h4>
            <button
              onClick={() => handleRemove(item.id)}
              className="px-5 py-2 bg-black text-white rounded-full w-36 hover:bg-gray-800"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default AddCart;
