import { useState } from "react";
export default function SearchBar({onSearch,random}) {
   const [id,setId] = useState('');
   const handleChange = (el) =>{
      setId(el.target.value)
   } 

   return (
      <div>
          <input id="input-search" type='search' placeholder="ID" onChange={handleChange} />
          <button class='btn-search' onClick={()=>onSearch(id)}>Agregar</button> 
          <button class='btn-search' onClick={()=>random()}>Aleatorio</button> 
      </div>
   );
}
