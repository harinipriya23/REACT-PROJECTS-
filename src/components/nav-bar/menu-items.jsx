import { useState } from "react";
import MenuList from "./menu-list";


export default function MenuItem({item}) {

  const [displayChildren , setDisplayChildren] = useState([])

   function handleToggle (currentChildrenLabel) {
     setDisplayChildren({...displayChildren,
      [currentChildrenLabel]:!displayChildren[currentChildrenLabel],
     })
   }
   console.log(displayChildren)

  return <li key={item.id} >
    <div style={{
      display:'flex', gap: '10px', 
      justifyContent:'center', margin: '3px', 
      padding:'5px', fontSize:'30px'
    }}>

    <h1>{item.label}</h1>

    {
      item && item.children && item.children.length ?
      <span onClick={()=> handleToggle(item.label)} className="cursor-pointer">
        {
          displayChildren[item.label] ? '-' : '+'
        }
      </span>
      : null
    }

    </div>
    {
      item && item.children && item.children.length && displayChildren[item.label] ? 
      <MenuList list = {item.children} />
      : null
    }
  </li>
}
