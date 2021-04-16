import './signup.css'
import {useRef,useState,} from 'react'
import {useAuth} from '../context/AuthContext'
import {Link,useHistory} from 'react-router-dom'


function ResetPassWord() {
  const emailRef= useRef()
  const history= useHistory()
 const { Resetpassword } = useAuth()
 const [message,setMessage]= useState()
 const [error,setError] = useState('')
 const [loading,setLoading]=useState(false)

 async function handlesabmit(e){
  e.preventDefault()
  try{
    setError('')
    await  Resetpassword(emailRef.current.value)
    setMessage('we send you an email to reset your password')
  }
  catch(error){
    setMessage('')
    setError(error.message)
    console.log(error)
  }

  
setLoading(false)
 }
  return(
    <div className='container'>
     <form className='signup_form' onSubmit={handlesabmit}>
    {error && <h3>{error}</h3> } {message && <h3>{message}</h3>}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" ref={emailRef} class="form-control" id="Email1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3 form-check">
  
    <label > </label>
  </div>
<div class='mb-3 form-check'>
  <button type="submit" disabled={loading} class="btn btn-primary">Reset password</button>
  </div>
    <div class="mb-3 form-check">
  
    <label >Don't have an account ? <Link to='/'> SignUp </Link>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; have account ?  <Link to='/login'> login</Link> </label>
  </div>
 
</form>
</div>)
}
export default ResetPassWord