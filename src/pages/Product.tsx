import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

const Product = () => {
  const { id } = useParams();
  const Api = `https://fakestoreapi.com/products/${id}`;
  const [allData, setallData] = useState<any>([]);
  const [isLoading, setisLoading] = useState(true);
  
  const getApiData = async () => {
    setallData([]);
    try {
      const response = await axios.get(Api);
      console.log(response.data);
      setallData(response.data);
      setisLoading(false);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }

  

  console.log(id);
  const {title,price,description,image,rating}= allData || {};
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating.rate); // Number of full stars
    const hasHalfStar = rating.rate % 1 !== 0; // Check if there's a half star
  
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoMdStar color="black" key={i} size={20} />);
    }
  
    // Add half star if present
    if (hasHalfStar) {
      stars.push(<IoMdStarHalf color="black" key={stars.length} size={20} />);
    }
  
    return stars;
  };
  useEffect(() => {
    getApiData();
    
  }, [id]); // Adding id as a dependency to re-fetch data when id changes
  return (
 <>
 {isLoading && <div className="flex items-center justify-center  h-screen">
      <Loader/>
      </div>}
    {!isLoading && (<section className="overflow-hidden ">
    <div className="mx-auto lg:py-32 max-w-5xl px-5 py-24">
      <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
        <img
          alt={title}
          className="h-full w-full  rounded object-contain bg-center lg:h-96 lg:w-1/2"
          src={image}
        />
        <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
          <h1 className="my-4 text-3xl font-semibold text-black">{title}</h1>
          <div className="my-4  flex items-center">
            <span className="flex items-center space-x-1">
             {renderStars() ? renderStars():"Loading..."}
           
              <span className="ml-3 inline-block text-xs font-semibold">{rating? rating.count :"Loading..."} Reviews</span>
            </span>
          </div>
          <p className="leading-relaxed">
          {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="title-font text-xl font-bold text-gray-900">${price}</span>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
         <Link to='/'>
         <button
              type="button"
              className=" flex items-center space-x-2 rounded-md mt-2 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
             <span> <FaArrowLeft /></span>
              <span>Back to Products</span>
            </button></Link>
      </div>
    </div>
  </section>)}</>
  )
}

export default Product;