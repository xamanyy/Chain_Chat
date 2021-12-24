import './App.css';
import Login from "./components/Login"
import {useMoralis} from 'react-moralis'

function App() {

  const {isAuthenticated, logout} = useMoralis();

  // const isAuthenticated = false;

  if(!isAuthenticated) {
    return <Login/>
    
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <button onClick= {logout}>Logout</button>
    </div>
  );
}

export default App;
