import './App.css';
import SignUp from './components/Signup'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import ResetPassWord from './components/ResetPassword'
import {AuthProvider} from './context/AuthContext'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="container">
    <Router>
    <Switch >
    <AuthProvider>
<Route exact path='/' component={SignUp} />
<Route path='/login'  component={Login} />
<Route path='/dashBoard' component={DashBoard} />
<Route path='/forgot-password' component={ResetPassWord} />

</AuthProvider>
</Switch>
</Router>
    </div>
  );
}

export default App;
