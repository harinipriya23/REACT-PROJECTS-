import { useState,useEffect } from "react"

export default function ShowMore (){
    const [loading, setLoading] = useState (false);
    const [errorMsg,setErrorMsg] = useState(null);
    const [count,setCount] = useState(0);
    const [products,setProducts] = useState([]);
    const [disableBtn, setDisableBtn] = useState(false);
  
    async function fetchingData(){
      setLoading(true)
       try {
        let url = (`https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20}`)
     
        let res = await fetch (url);
        let data = await res.json();

        if (data && data.products && data.products.length)
            { setProducts ((products)=> [...products,...data.products])
        console.log(data)
            }
            setLoading(false)
      } catch (error) {
         setErrorMsg(error.message)
         setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    useEffect(()=> {fetchingData()},[count])

    useEffect(()=> {disabling ()},[products])

    function disabling (){
       if ( products && products.length === 100 ){
        setDisableBtn(true)
       }
    }

        if (loading ){
        return <div>
            <h3 className="m-3 capitalize text-2xl">Please wait while loading products...</h3>
        </div>}
        if (errorMsg) {
        return <div><h3 className="m-3 capitalize text-2xl">
                an error occured !! {errorMsg}
            </h3></div>}

    return <div className="flex flex-col m-3">
       <div className="grid grid-cols-4 gap-3"> {
            products && products.length ? 
             products.map((item)=> 
              ( <div className="flex flex-col p-2 border-2 border-black">
                <img className="size-40 m-2 p-2" key={item.id}
                 src={item.thumbnail} alt={item.title}/>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                </div>
             ))
            : null
        }</div>
     <div>
        <button disabled={disableBtn} onClick={()=> setCount( count+1) }>Show more</button>
        {
            disableBtn ? <p className="text-center text-xl capitalize">you have reached the maximum number of products</p> : null
        }
        </div>
    </div>
}