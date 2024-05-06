import { useState } from "react"
import data from "./data.js"


export default function Accordion () {
    const [selection,setSelection] = useState(null)
    const [enabled,setEnabled] =useState(false)
    const [multiSelection,setMultiSelection] = useState([])

function handleSingleSelection(currentId){
  console.log(currentId);
  setSelection(currentId === selection ? null :currentId)
}
function handleMultiSelection(currentId) {
  let copy = [...multiSelection]
  const index = copy.indexOf(currentId)
  console.log(index)

  if (index === -1)
  copy.push(currentId)
 else  copy.splice(index,1)
   
 setMultiSelection(copy)
}
    return (
        <div className="text-center bg-slate-800 text-white">
           {/* single selection and multi selection */}
         <div className="">
          <button onClick={()=>setEnabled(!enabled)
          }
           className="p-2 m-10 text-black bg-amber-100 capitalize">enable multi selection</button>
           { data && data.length > 0 ?
           <div>
            {data.map((dataItem)=>
            <div>
            <div className="item">
              <h2 onClick={enabled ? ()=>
                handleMultiSelection(dataItem.id) :()=> handleSingleSelection(dataItem.id)}>{dataItem.question}</h2>
              <span>+</span>
            </div>
            {
              enabled ? multiSelection.indexOf(dataItem.id) !== -1 &&
              <div>{dataItem.answer}</div>
              :selection === dataItem.id ?
              <div>{dataItem.answer}</div>
              :null
            }
            {/* {
              selection === dataItem.id ?
              <div>{dataItem.answer}</div>
              :null
            } */}
            </div>
          )}
          </div>
          :<div>No data found !</div>}
          </div>
          </div>
    )
}