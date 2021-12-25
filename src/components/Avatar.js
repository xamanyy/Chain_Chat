import { useMoralis} from "react-moralis"
import "../components/Avatar.css"

function Avatar({username, logoutOnPress}) {

  const {user, logout} = useMoralis();
  return (
    <div>
       <img src= {`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`} alt =".." className="ava"onClick ={() => logoutOnPress && logout()}/>
    </div>
  )
}

export default Avatar
