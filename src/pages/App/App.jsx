import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import Home from '../Home/Home'


function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignupOrLogin(){
    setUser(userService.getUser());
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage handleSignupOrLogin={handleSignupOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <> 
             <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            </>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default App;
