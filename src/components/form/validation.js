export default function validation(userData,setErrors){
let setEmail = '',
      setPassword = '';

if(!userData.email) setEmail ='complete este campo'
else if(userData.email.length > 35) setEmail = 'no puede superar los 35 caracteres'
else if( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) setEmail = 'email invalido'
else setEmail = ''


if(!userData.password) setPassword = 'complete este campo'
else if(userData.password.length < 6 || userData.password.length > 10) setPassword = 'longitud invalida'
else if(!/\d/.test(userData.password)) setPassword = 'por favor incluye un numero en tu password'
else setPassword = ''

setErrors({email:setEmail,password:setPassword})

}
