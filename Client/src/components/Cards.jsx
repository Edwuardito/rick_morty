import Card from './Card';
function Cards({characters,onClose}){
   return(
      <div class ='cards'>
          { 
             characters.map(charact =>{
                return <div class='cardClass'>
               <Card
                onClose={onClose}
                id={charact.id}
                image={charact.image}
                name={charact.name}
                status={charact.status}
                species={charact.species}
                gender={charact.gender}
                origin={charact.origin.name}
                /></div>
             } )
          }
      </div>
   )
}
export default Cards;   