import React,{useState,useEffect} from 'react'
import styles from "../Greetings/Greetings.module.css";


const Greetings = () => {
  const [greeting, setGreeting] = useState("");
  const [username, setUsername ] = useState("Sarthak");
  const hours = new Date().getHours();
  
  useEffect(() => {
    if ( hours < 12 ){
        setGreeting("Morning👋");
      }
      else if ( hours >= 12 && hours <= 17 ){
        setGreeting("Afternoon🔆");
      }
      else{
        setGreeting("Evening🌙");
      }
  },[]);

  return (
    <div className={styles.greetings}>
        <h1 id={styles.line}>{greeting}, Top news stories for {username}</h1>
    </div>
  )
}

export default Greetings