import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
type propsType={
  cardDetail:{
    title:string,
    id:number,
    price:number,
    description:string,
    category:string,
    image:any,
    rating:{
      rate:number,
      count:number
    }
  }
  handleClick:any,
}

export function Card(props:propsType) {
  const {cardDetail,handleClick}=props;
  const {title,id,price,description,image,rating}=cardDetail;
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
  
  return (
    <div onClick={()=>{
      handleClick(id)
    }} id={id.toString()} className="card bg-white mt-4 relative  p-1 cursor-pointer text-black  w-[320px] rounded-md border duration-300 transition-transform hover:scale-105">
      <img
        src={image}
        alt="Laptop"
        className="h-[300px]  w-full rounded-md object-contain"
      />
      <div className="p-4">
       <div className="flex justify-between">
       <div className="flex">
       {renderStars()}
       </div>
       <div className="">
        Avilability:
        <span className="font-semibold ml-1">
        {rating.count}
        </span>
       </div>
       </div>
        <div className="flex justify-between">
        <h1 className="text-lg font-semibold "> {title? `${title.slice(0,10)}...`:"No Title Avilable"}</h1>
        <h1 className="text-lg font-semibold flex">Price: ${price}</h1>
        </div>
        <p className="mt-3 text-sm text-black" title={description}>
          {description? `${description.slice(0,66)}...`:"No Details Avilable"}
        </p>
      </div>
      <button
    type="button"
    className="rounded-md bg-black   text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-full h-10"
  >
    Add to Cart
  </button>
      <div>
      </div>
    </div>
  )
}
