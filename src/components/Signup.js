import './signup.css'
import {useRef,useState,} from 'react'
import {useAuth} from '../context/AuthContext'
import {Link,useHistory} from 'react-router-dom'


function SignUp() {
  const emailRef= useRef()
  const passwordRef =useRef()
  const history = useHistory()
 const  confirmPasswordRef =useRef()
 const { signUp,currentUser } = useAuth()
 const [error,setError] = useState('')
 const [loading,setLoading]=useState(false)

 async function handlesabmit(e){
  e.preventDefault()
  if(passwordRef.current.value !== confirmPasswordRef.current.value){
     return setError('password do not match')
  }
  try{
    setError('')
    setLoading(true)
    await signUp(emailRef.current.value,passwordRef.current.value)
    history.push('/dashboard')
  }
  catch(error){
       setError(error.message)
       console.log(error.message)
  }
setLoading(false)
 }
  return(
    <div className='container'>
     <form className='signup_form' onSubmit={handlesabmit}>
     {error && <h3>{error}</h3>}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" ref={emailRef} class="form-control" id="Email1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password"  ref={passwordRef} class="form-control" id="Password1"/>
  </div>
  <div class="mb-3">
    <label class="form-label">Confirm Password</label>
    <input type="password"ref={confirmPasswordRef}class="form-control" id="Password1"/>
  </div>   
  <div class="mb-3 form-check">
  
    <label > </label>
  </div>
<div class='mb-3 form-check'>
  <button type="submit" disabled={loading} class="btn btn-primary">Sign UP</button>
  </div>
    <div class="mb-3 form-check">
  
    <label >Already have an account ?<Link to='/login'> Login </Link> </label>
  </div>
 
</form>
</div>)
}
export default SignUp