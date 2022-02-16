import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Home, Profile, Chats, Weather } from './routes';
import { Registration, Login } from './routes';
import { isUserLoggedIn, initAuthUserAction } from './store/user';
import { PublicRoute, PrivateRoute } from './hocs';

import { Container } from '@mui/material';
import { getHomeLink, getProfileLink, getChatsLink, getChatByIdLink, getWeatherLink } from './navigation';
import { getRegistrationLink, getLoginLink } from './navigation';

function App() {

  const isLoggedIn = useSelector(isUserLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthUserAction);
  }, []);


  return (
    <div className='App'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/chats'>Chats</Link>
        <Link to='/weather'>Weather</Link>
        <Link to='/registration'>Registration</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Switch>
        <Route authenticated={isLoggedIn} exact path={getHomeLink()} component={Home} />
        <PublicRoute authenticated={isLoggedIn} exact path={getRegistrationLink()} component={Registration} />
        <PublicRoute authenticated={isLoggedIn} exact path={getLoginLink()} component={Login} />
        <PrivateRoute authenticated={isLoggedIn} exact path={getProfileLink()} component={Profile} />
        <PrivateRoute authenticated={isLoggedIn} path={getChatByIdLink()} component={Chats} />
        <PrivateRoute authenticated={isLoggedIn} path={getChatsLink()} component={Chats} />
        <Route authenticated={isLoggedIn} path={getWeatherLink()} component={Weather} />
        <Route><h3>Page not found</h3></Route>
      </Switch>
    </div>
  );
}

export default App;