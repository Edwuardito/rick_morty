import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"


export default function Detail(){

const URL_BASE ='https://be-a-rym.up.railway.app/api/character';
const URL_BASE0 = 'http://localhost:3001/rickandmorty/character'
const API_KEY = '550411c16b58.f3d1661bf9a802877004';    
const [character,setCharacter] = useState({})
const {id} = useParams();
    useEffect(() => {
        // fetch(`${URL_BASE}/${id}?key=${API_KEY}`)
        fetch(`${URL_BASE0}/${id}`)
        .then((response)=>response.json())
        .then((data)=>{
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert('No hay personajes con ese ID');
        }
        });
        return setCharacter({});
    }, [id]);

    return(
        <>
        <h1>{character?.name}</h1>
        <h2>{`STATUS | ${character?.status}`}</h2>
        <h2>{`GENDER | ${character?.species}`}</h2>
        <h2>{`SPECIE | ${character?.gender}`}</h2>
        <h2>{`ORIGIN | ${character?.name?.origin}`}</h2>
        <img src={character?.image} alt={character?.name}/>
        </>
    )
}