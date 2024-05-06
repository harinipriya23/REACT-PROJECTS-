import React, { useEffect, useState } from "react";

export default function ColorGenerator (){
    const [colorType, setColorType] = useState ('rgb')
    const [bgdColor,setBgdColor] = useState('')
    
    function callingRandom (length){
      return Math.floor(Math.random()* length)
    }

    function handleHexColors(){
       const hexRaw = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
       let hex = "#" ;

       for(let i=0; i<6; i++){
         hex += hexRaw[callingRandom(hexRaw.length)]
      }
      setBgdColor(hex)
      console.log(hex)
    }
     function handleRgbColors(){
      const r = callingRandom(56);
      const g = callingRandom(26);
      const b = callingRandom(256);
      setBgdColor(`rgb (${r},${g},${b})`)
     }
    useEffect(()=> {
     if(colorType === "rgb") handleRgbColors();
     else handleHexColors();
    },[colorType]
  )

    return <div style={{
        width: "100vw",
        height:"100vh",
        background: bgdColor,
    }}>
      <h1 className=" text-bold text-white uppercase text-center text-4xl"> Random color generator</h1>
      <div className="flex justify-evenly m-4">
        <button onClick={colorType === "rgb" ? handleRgbColors : handleHexColors}
        className="uppercase p-2 bg-slate-800 border-white border-2  text-white ">create random color</button>
        <button onClick={()=>setColorType("hex")}
        className="uppercase p-2 bg-slate-800 border-white border-2  text-white">hex color</button>
        <button onClick={()=>setColorType("rgb")}
        className="uppercase p-2 bg-slate-800 border-white border-2  text-white">rgb color</button>
      </div>
      <div className="flex justify-center items-center m-48 capitalize h-20 text-bold text-5xl">
        <h2 className="uppercase p-10">{colorType === "hex" ? "hex color" : "rgb color"}  </h2>
        <h3 className="lowercase"> {bgdColor}</h3>
      </div>
    </div>
}
