/* eslint-disable no-unused-vars */
import "../components/Messages.css"
import {useRef} from "react"
import SendMessages from "../components/SendMessages.js"
import {useMoralis, ByMoralis, useMoralisQuery} from "react-moralis"
import Message from "../components/Message.js"

const MINS_DURATION = 15;

function Messages() {

  const {user} = useMoralis();
  const endofMessagesRef = useRef(null);
  const {data,loading,error} = useMoralisQuery(
    'Messages',
    (query) => query.ascending("createdAt").greaterThan(
      'createdAt', new Date(Date.now() - 1000*60*MINS_DURATION)),
    
      [],
      {
        live:true,
      }
  );

// console.log(data);

  return (
    <div className="primary">
      <div className="secondary">
          <ByMoralis
           variant = "dark"
           style={{marginLeft:"auto", marginRight: "auto"}} />
      </div>

      <div className="each-msg">
        {data.map((message) =>(
          <Message key={message.id} message={message}/>
        ))}
      </div>

      <div className="send">
        <SendMessages endofMessagesRef={endofMessagesRef}/>
      </div>

      <div ref = {endofMessagesRef} className="uptoDate">
        <p> You are up to date {user.getUsername()}</p>
      </div>

    </div>
  )
}

export default Messages
