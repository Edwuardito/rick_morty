import { useState } from 'react'
import validation from './validation'


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
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' value={userData.email} onChange={handleChange}></input>
            <p>{errors.email}</p>
            <label html="password">Password</label>
            <input type="password" name='password' value={userData.password} onChange={handleChange}></input>
            <p>{errors.password}</p>
            <button >Submit</button>
        </form>
    </>
   ) 
}