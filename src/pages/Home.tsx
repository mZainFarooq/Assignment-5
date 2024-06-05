import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const Api="https://fakestoreapi.com/products"
    const [allData, setallData] = useState<any>([]);
    const [isLoading, setisLoading] = useState(true);
    
    const getApiData= async ()=>{
      setallData([])
      try {
        const response = await axios.get(Api);
        console.log([...response.data])
        setallData([...response.data])
        setisLoading(false)
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    useEffect(() => {
      getApiData();
    }, []);

    const navigate=useNavigate();
 
  return (
    <div className=" ">
      <h1 className="text-4xl font-semibold text-center mt-4 ">All Products</h1>
      {isLoading && <div className="flex items-center justify-center  h-screen">
      <Loader/>
      </div>}
      <div className="flex flex-wrap w-full py-12  gap-6 justify-center lg:px-28 px-0 ">
      
      {allData.map((x:any,i:number)=>{
        return <Card key={i} handleClick={(id:any)=>{
          navigate(`/product/${id}`)
        }} cardDetail={x} />
      })} 
      </div>
    </div>
  )
}

export default Home
