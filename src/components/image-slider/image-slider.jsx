import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function ImageSlider ({url, limit = 9, page = 3}){
      const [image,setImage] = useState(0);
      const [currentSlide, setCurrentSlide] = useState (0);
      const [loading,setLoading] = useState(false);
      const [errorMsg, setErrorMsg] = useState(null);
       
      const fetchingImages = async(url)=>{
        setLoading(true)

        try {
            let res = await fetch (`${url}?page=${page}&limit=${limit}`);
            let data = await res.json();
            console.log (url)
            if (data) {
                  setImage(data)
            }
            console.log(data)
        } catch (error) {
            console.log('hloo')
            console.log(error.message)
            setErrorMsg(error.message)            
        } finally {
            setLoading(false)
        }
      }
      useEffect (()=> { if (url !== "") fetchingImages(url)},[url])

        function handlePrevImg(){
            const prevClick = (currentSlide === 0 ? 
                image.length - 1 : currentSlide - 1)
         setCurrentSlide (prevClick)
        }

        function handleNextImg(){
            const nextClick = (currentSlide === image.length -1 ? 
                0 : currentSlide + 1)
         setCurrentSlide (nextClick)
        }
        {loading && <div className="text-2xl text-bold text-center capitalize">please wait...</div>}
        {errorMsg &&  <div className="text-2xl text-bold text-center capitalize">An error occured !! {errorMsg}</div>}
        

    return <div>
     <h1 className="text-3xl uppercase text-center m-3 ">image slider</h1>
     <div className=" relative flex justify-center align-middle h-full w-full m-10 p-5"> 
         
        <FaArrowAltCircleLeft onClick={()=>handlePrevImg()}
         className="arrow left-1/4 top-1/2"/>
        {image && image.length ?
            image.map((imgItem,index)=> (
            <img style={{
                margin:3,
                borderRadius:10,
                height:400,
                width:450,
                border:3,
                borderColor:"black",
                borderStyle:"solid",
            }}
            className={ currentSlide === index ? "current-img": " inactive-current-img"}
            key={imgItem.id}
            alt={imgItem.download_url}
            src={imgItem.download_url}
            />
            ))
            :null
        }
        <FaArrowAltCircleRight onClick={()=> handleNextImg()}
         className="arrow right-1/4 top-1/2"/>
        <span className="absolute flex bottom-14">
            {image && image.length ?
             image.map((_,index)=>(
                <button style={{
                    backgroundColor:"",
                    height:10,
                    width:10,
                   margin:3,
                   borderRadius: 50,

                }}
                 className={currentSlide === index ? "current-span": "inactive-current-span "}
                 key={index}
                 onClick={()=> setCurrentSlide(index)}
                 ></button>)
             ):null
            }
        </span>
       </div>
    </div>

}