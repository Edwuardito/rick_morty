import { useState } from 'react'
import validation from './validation'
import ReactPlayer from 'react-player'


export default function Form({login}){
    const [userData,setUserData] = useState({
        email:'',
        password:'' 
    })

        
    const [errors,setErrors] = useState({})

    const handleChange = (event)=>{
        const property = event.target.name
        const value =  event.target.value
        setUserData({...userData,[property]:value})
        validation({...userData,[property]:value},setErrors)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        login(userData)
    }
   return(
    <>
    <div className='divForm'>
    <form className='form' onSubmit={handleSubmit}>
            <label className='label' htmlFor="email">Email</label>
            <input className='imput' type="email" name='email' value={userData.email} onChange={handleChange}></input>
            <p>{errors.email}</p>
            <label className='label' html="password">Password</label>
            <input className='imput' type="password" name='password' value={userData.password} onChange={handleChange}></input>
            <p>{errors.password}</p>
            <button className='button'>Submit</button>
        </form>
    </div>     
    </>
   ) 
}