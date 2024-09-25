import Card from './Card'
import  list  from '../../public/list.json'

const Herosection = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-green-700 text-center my-5">
        Are you Explorer? Buy Now!
      </h1>
      <h1 className="text-xl md:text-xl sm:text-xl font-bold text-red-700 text-center my-5">
          Login required for access all Product
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {
          list.map((item) => (
            <Card item={item} key={item.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Herosection
