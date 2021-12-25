/* eslint-disable no-unused-vars */
import './App.css';
import Login from "./components/Login"
import {useMoralis} from 'react-moralis'
import Header from './components/Header';
import Messages from './components/Messages.js';

function App() {

  const {isAuthenticated, logout} = useMoralis();

  // const isAuthenticated = false;

  if(!isAuthenticated) {
    return <Login/>
    
  }
  return (
    <div className="app">
      <div className="main-content">
        <div className="main">
          <Header />
          <Messages/>
        </div>
      </div>

      {/* footer */}

    </div>
  );
}

export default App;
