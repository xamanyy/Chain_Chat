import "../components/Login.css";
import background from "../assets/background.jpg";
import me from "../assets/Photo.png";
import {useMoralis} from"react-moralis"

function Login() {
const { authenticate } = useMoralis();
// console.log(authenticate);

  return (
    <div className="login">
      <div className="user">
        <img src={me} alt=".." className="User-pic" />
        <button onClick={() => authenticate()} className="login-btn">Login</button>
      </div>
      <div className="bg">
        <img src={background} className="bg-img" alt=".." />
      </div>
    </div>
  );
}

export default Login;
