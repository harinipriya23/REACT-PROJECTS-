
import { IoStarSharp } from "react-icons/io5";
import { useState } from "react";

export default function StarRating ({noOfStars=10}){
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleOnClick(currentId){
     setRating(currentId)
     console.log(currentId)
    }
    function handleOnMouseMove(currentId){
        setHover(currentId)
        console.log(currentId)
    }
    function handleOnMouseLeave(){
      setHover(rating)
    }
   return <div>
    <h1 className="uppercase text-center text-3xl text-bold">start rating</h1>
    { 
    <div className="flex justify-center align-middle m-3">
        {
        [...Array(noOfStars)].map((_,index)=>{
            index += 1;
            return <IoStarSharp
            key={index}
            onClick={()=> handleOnClick(index)}
            onMouseMove={()=> handleOnMouseMove(index)}
            onMouseLeave={()=> handleOnMouseLeave()}
            className={index <= (hover || rating) ? 'active' : 'inactive'}         
            size= {40}
            />
        })
        }
    </div>
    }
   </div>
}