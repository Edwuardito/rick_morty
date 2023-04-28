import Card from "./Card"
import { connect } from "react-redux"
const Favorites = ({myFavorites}) => {
    return(

        <div class = 'cards'>{
            myFavorites?.map(fav =>{
                return(
                    <div class='cardClass'>
                    <Card
                    key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    onClose={fav.onClose}
                    />
                    </div>
                )

            } 
                
                )
        }
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(
    mapStateToProps,
    null
)(Favorites)