import React from 'react'
import Herosection from './Herosection'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        {/* Image div, now positioned on the left */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-10">
          <img
            src="https://img.freepik.com/free-photo/pnga-stack-books-isolated-white-background_185193-164139.jpg?t=st=1726818950~exp=1726822550~hmac=1b49a060dbf8fd2cb6864c3d6f2fd03dc3f6f947f3692f2ef95bd20059f104e2&w=900"
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>

        {/* Text content div, now positioned on the right */}
        <div className="w-full order-1 md:order-2 md:w-1/2 mt-12 ml-14 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn{" "}
              <span className="text-red-500">Explore and Learn!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
          </div>
          <Link to="/books" className="btn mt-6 btn-secondary">Explore Now</Link>
        </div>
      </div>
      <Herosection />
    </>
  )
}

export default Index
