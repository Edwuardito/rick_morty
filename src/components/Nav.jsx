import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";

const Nav = ({onSearch,random,pathname,logOut})=>{
    if(pathname !== '/') return(
        <nav id="navegador" >
            <SearchBar onSearch={onSearch} random={random}/>
            <Link to='/about'><button class='btn-search'>about</button></Link>  
            <Link to='/home'><button class='btn-search'>home</button></Link>
            <Link to='/favorites'><button class='btn-search'>favorites</button></Link>
            <button onClick={logOut} class='btn-out'>salir</button>
        </nav>
    )
}
export default Nav;