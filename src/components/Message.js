import "../components/Message.css"
import Avatar from "../components/Avatar.js"
import {useMoralis} from "react-moralis"
import "../styles/output.css";
import TimeAgo from 'timeago-react'

function Message({message}) {
const {user} = useMoralis();

const isUserMessage = message.get('ethAddress') === user.get("ethAddress");

  return (
    <div className={isUserMessage ? "iser" : "nser"}>
      <div className={isUserMessage ? "deco" : "ndeco"}>
        <Avatar username={message.get("username")} />
      </div>

      <div className={isUserMessage ? "isUser" : "notUser"}>
        <p>{message.get("message")}</p>
      </div>

      {/* Timestamp */}

      <TimeAgo
        className={isUserMessage ? "usertimestamp" : "nusertimestamp"}
        datetime={message.createdAt}
      />

      <p className={isUserMessage ? "usr" : "nusr"}>
        {message.get("username")}
      </p>
    </div>
  );
}

export default Message
