import {createContext,useContext,useState,useEffect} from 'react'
import {auth} from '../firebase'


export const AuthContext = createContext()


export function useAuth(){
	return useContext(AuthContext)
}


export function AuthProvider({children}) {
	const [currentUser,setCurrentUser] =useState()
	const [loading,setLoading]= useState(true)

	function signUp(email,password){
		return auth.createUserWithEmailAndPassword(email,password)
	}
	function Login(email,password){
		return auth.signInWithEmailAndPassword(email,password)
	}
	function Logout(){
		auth.signOut()
	}
	function Resetpassword(email){
		return auth.sendPasswordResetEmail(email)
	}
	function updateEmail(email){
		return currentUser.updateEmail(email)
	}
	function updatePassword(password){
		return currentUser.updatePassword(password)
	}


	useEffect(()=>{
		const unsubscribe = auth.onAuthStateChanged(user=>{
			setCurrentUser(user)
			setLoading(false)
		})
		return unsubscribe
	},[])

	const value = {
		currentUser,signUp,Login,Logout,Resetpassword,updatePassword,updateEmail
	}

return(<AuthContext.Provider value={value}>
      {!loading && children}
</AuthContext.Provider>
	)
}

