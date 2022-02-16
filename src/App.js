import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Home, Profile, Chats } from './routes';

import { Container } from '@mui/material';
import { getHomeLink, getProfileLink, getChatsLink, getChatByIdLink } from './navigation';

function App() {

  return (
    <div className='App'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/chats'>Chats</Link>
      </nav>
      <Switch>
        <Route exact path={getHomeLink()} component={Home} />
        <Route exact path={getProfileLink()} component={Profile} />
        <Route path={getChatByIdLink()} component={Chats} />
        <Route path={getChatsLink()} component={Chats} />
        <Route><h3>Page not found</h3></Route>
      </Switch>
    </div>
  );
}

export default App;