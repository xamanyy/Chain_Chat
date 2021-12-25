import "../components/SendMessges.css"
import {useState } from "react"
import {useMoralis} from "react-moralis"

function SendMessages({endofMessagesRef}) {
const {user, Moralis} = useMoralis();
const [message,setMessage] = useState("");

const sendMessage = (e) =>{

    e.preventDefault();

    if(!message) return;

    const Messages = Moralis.Object.extend('Messages');
    const messages  = new Messages();

    messages.save({
      message: message,
      username:user.getUsername(),
      ethAddress: user.get('ethAddress'),

    }).then((message)=>{


    },(error)=>{
      console.log(error.message)
    } 
    );

    endofMessagesRef.current.scrollIntoView({behavior: "smooth"})

    setMessage("");

};

  return (
    <form>
      <input
        type="text"
        className="msg-box"
        value = {message}
        onChange={e => setMessage(e.target.value)}
        placeholder={`Enter a message ${user.getUsername()}......`}
      />
      <button onClick ={sendMessage} type="submit" className="btn-send">
        Send
      </button>
    </form>
  );
}

export default SendMessages
