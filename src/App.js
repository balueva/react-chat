import logo from './logo.svg';
import './App.css';
import { Message } from './component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text='Hello Word!'>
        </Message>
      </header>
    </div>
  );
}

export default App;
