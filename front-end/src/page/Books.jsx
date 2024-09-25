import React, { useEffect, useState } from 'react';
import SideCategory from './SideCategory';
import Slider from "react-slick";
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toast from 'react-hot-toast';

const Books = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const dispatch = useDispatch();
  const [book, setBook] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleItem = (item) => {
    dispatch(addItem(item));
    toast.success("Item Add Into Cart")
  };

  useEffect(() => {
    const getBook = async () => {
      try {
        let data = await fetch('https://explore-novel.vercel.app/book');
        let response = await data.json();
        setBook(response);
      } catch (error) {
        console.log('API ERROR:', error);
      }
    };
    getBook();
  }, []);

  // Filter books based on selected category
  const filteredBooks = selectedCategory ? book.filter((data) => data.category === selectedCategory) : book;

  return (
    <>
      <section className="w-full h-[450px] bg-center bg-cover flex flex-col justify-center items-center mt-20" style={{ backgroundImage: "url('https://images.pexels.com/photos/1005012/pexels-photo-1005012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
        <h1 className="text-5xl font-bold text-black font-serif shadow-md mb-2">Discover the Best</h1>
        <h2 className="text-3xl font-semibold text-gray-600 font-serif shadow-md mb-4">Novels Collection</h2>
        <button className="bg-red-600 text-white py-3 px-8 mt-4 rounded-full hover:bg-red-700 transition duration-300 ease-in-out shadow-lg font-serif">Order Now</button>
      </section>


      <div className="flex flex-col lg:flex-row px-4 mt-4">
        <SideCategory setSelectedCategory={setSelectedCategory} />

        <div className="lg:flex-grow w-full lg:ml-4">
          <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-green-700 text-center my-10">
            Explore {selectedCategory || 'All'} Novels
          </h1>

          <Slider {...settings}>
            {filteredBooks.length > 0 ? filteredBooks.map((item) => (
              <div key={item.id}>
                <div style={container}>
                  <div style={imageContainer}>
                    <img src={item.image} style={image} alt="Not Show" />
                  </div>
                  <div style={details}>
                    <h1>{item.name}</h1>
                    <h2>{item.price}</h2>
                  </div>
                  <button style={button} onClick={() => handleItem(item)} className='hover:bg-red-800'>Add to Cart</button>
                </div>
              </div>
            )) : (
              <div className="text-center">No books available for this category.</div>
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};

// Styles for the book container
const container = {
  height: '300px',
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '20px',
  marginBottom: '30px'
};

const imageContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '180px',
};

const details = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '15px',
};

const image = {
  height: '200px',
  width: '140px',
  objectFit: 'cover',
};

const button = {
  backgroundColor: 'red',
  padding: '10px 10px',
  color: 'white',
  borderRadius: '20px',
  marginTop: '10px',
  marginLeft: '25px',
  width: '150px',
};

export default Books;
