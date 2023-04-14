import { Link } from "react-router-dom"
import { addFav,removeFav } from "../redux/action"
import { connect } from "react-redux"
import { useState,useEffect } from "react"

function Card({name,status,species,gender,origin,image,id,onClose,addFav,removeFav,myFavorites}) {

   const [isFav,setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }
      else{
         setIsFav(true)
         addFav({name,status,species,gender,origin,image,id,onClose})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <>
         {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
         }
         <button class='btn-card'onClick={()=>onClose(id)}>x</button>
         <Link to={`/detail/${id}`} ><h2>{name}</h2></Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img class='img-card'src={image}/> 
      </>
   )
}
const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav:(character) => dispatch(addFav(character)),
      removeFav:(id)=> dispatch(removeFav(id))
   }
}
   
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)