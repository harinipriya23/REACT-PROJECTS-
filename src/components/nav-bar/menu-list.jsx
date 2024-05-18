import MenuItem from "./menu-items";

export default function MenuList ({list = []}) {
    return (
    <ul>
     { 
        list && list.length ?
        list.map((listItem)=> < MenuItem item ={listItem} /> ): console.log("null")
     }
    </ul>)
}