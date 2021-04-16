import {useAuth} from '../context/AuthContext'
import {useHistory,Link} from 'react-router-dom'
import {useState,useRef} from 'react'
import './dashboard.css'
function DashBoard() {
	const {currentUser,updateEmail,updatePassword,Logout} = useAuth()
	const history = useHistory()
	const [chaclass,setChaClass] = useState(true)
	const emailRef= useRef()
  const passwordRef =useRef()
 const  confirmPasswordRef =useRef()
 const [error,setError] = useState('')
 const [loading,setLoading]=useState(false)


	function handleClick(){
		Logout()
		
	}
	function changeClass(){
		setChaClass(!chaclass)
	}

 async function handlesabmit(e){

  e.preventDefault()
  setLoading(false)
  if(passwordRef.current.value !== confirmPasswordRef.current.value){
     return setError('password do not match')
  }
  const promises = []
  if(emailRef.current.value !== currentUser.email){
  	promises.push(updateEmail(emailRef.current.value))
  }
    if(passwordRef.current.value){
  	promises.push(updatePassword(passwordRef.current.value))
  }
  Promise.all(promises).then(()=>{
  	history.push('/')
  }).catch(()=>{
  	setError('could not update account')
  }).finally(()=>{
  	setLoading(false)
  })
 
setLoading(false)
 }
	return(
		<div className='main'><strong> Profile  for </strong> {currentUser ? currentUser.email : history.push('/login') }
		<div><button className='btn btn-primary ' onClick={handleClick}>Log out </button> </div>
		<button className='btn btn-success ' onClick={changeClass}>{chaclass ? 'Update profile' : 'close'}</button> 
		<div className={chaclass && 'hide'}>
		profile update section
 <form className='signup_form' onSubmit={handlesabmit}>
     {error && <h3>{error}</h3>}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" ref={emailRef} class="form-control" id="Email1" aria-describedby="emailHelp" defaultValue={currentUser && currentUser.email}/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password"  ref={passwordRef} class="form-control" id="Password1" placeholder='Leave blank to keep same'/>
  </div>
  <div class="mb-3">
    <label class="form-label">Confirm Password</label>
    <input type="password"ref={confirmPasswordRef}class="form-control" id="Password1" placeholder='leave blank to keep same'/>
  </div>   
  <div class="mb-3 form-check">
  
    <label > </label>
  </div>
<div class='mb-3 form-check'>
  <button type="submit" disabled={loading} class="btn btn-primary">Reset</button>
  </div>
    <div class="mb-3 form-check">
  
    <label ><Link to='/login'> Login </Link> </label>
  </div>
 
</form>





		 </div>
</div>


		)
}
export default DashBoard