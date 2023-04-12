import './App.css';
import { Route,Routes, useLocation,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
// import axios from 'axios'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites';

const URL_BASE ='https://be-a-rym.up.railway.app/api/character';
const API_KEY = '550411c16b58.f3d1661bf9a802877004';

function App() {

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'soyhenry@gmail.com'
   const PASSWORD = 'henry123'

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   function logOut() {
      setAccess(false)
      navigate('/')
   }



   function onSearch(id) {

      if(id >= 827) window.alert('el personaje no existe')

      fetch(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response)=> response.json())
      .then((data) => {
         characters.forEach(el =>{if(el.id == id) data.name = null}) 
         if(data.name)setCharacters((oldChars) => [...oldChars, data]) 
         else window.alert(`¡el personaje ya fue elegido!`)
      })
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
