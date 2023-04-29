import './App.css';
import { Route,Routes, useLocation,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites';

const URL_BASE ='https://be-a-rym.up.railway.app/api/character';
const URL_BASE0 = 'http://localhost:3001/rickandmorty/character'
const API_KEY = '550411c16b58.f3d1661bf9a802877004';
const URL = 'http://localhost:3001/rickandmorty/login/';
function App() {

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const login = async (userData) => {
      try {
         const { email, password } = userData;

         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
      
         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message)
      }

   }
   function logOut() {
      setAccess(false)
      navigate('/')
   }



   const onSearch = async(id) =>{
      try {
         if(id >= 827) window.alert('el personaje no existe')
         const { data } = await axios(`${URL_BASE0}/${id}`)
   
         characters.forEach(el =>{if(el.id == id) data.name = null}) 
         if(data.name) setCharacters((oldChars) => [...oldChars, data]) 

      } catch (error) {
         alert(`¡el personaje ya fue elegido!`)
      }


   }
   function random(){
      let numRamdom = Math.ceil(Math.random()*826)
      onSearch(numRamdom)
   }

   const onClose = (id)=>{
      const newCharacters =  characters.filter(el => el.id !== id )
      setCharacters(newCharacters)
   }

   const {pathname} = useLocation()


   

   return (
      <div className='App'>
         <Nav onSearch={onSearch} random={random} pathname={pathname} logOut={logOut}/>
         <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/home' element={<Cards  characters={characters} onClose={onClose} />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
