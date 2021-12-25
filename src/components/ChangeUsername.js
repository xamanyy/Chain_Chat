import "../components/ChangeU.css"
import { useMoralis} from "react-moralis"

function ChangeUsername() {
const {setUserData, isUserUpdating, useError, user} = useMoralis();

const setUsername = () =>{
  const username = prompt(`Enter your new username (current : ${user.getUsername()})`);

  if(!username) return;

  setUserData({
  username,
  });
}

  return (
    <div>
      <button
        className="bton"
        disabled={isUserUpdating}
        onClick={() => setUsername()}
      >
        Change User Name
      </button>
    </div>
  );
}

export default ChangeUsername
