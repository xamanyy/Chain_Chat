import { useMoralis } from "react-moralis"
// import profile from "../assets/Photo.png"
import "../components/Header.css"
import Avatar from "../components/Avatar.js"
import ChangeUsername from "../components/ChangeUsername";

function Header() {
const {user} = useMoralis();

  return (
    <div>
      <div className="container">
        {/* <div className="sec-content">
          <img src={profile} alt=".." className="user-pic" />
        </div> */}

        <div className="user-details">
          <div className="avatar">
            <Avatar logoutOnPress />
          </div>
          <h1 className="wlc-text">Let's Chat</h1>
          <h2 className="address">{user.getUsername()}</h2>
        </div>

        <div className="changeUser">
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header
