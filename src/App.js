import './App.css';
import {useState } from "react";
import Axios from "axios";
import backimg from './backimg.jpg'; 


function App() {
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [DataUser, setDataUser] = useState([]);

  const getUsers = () => {
    Axios.get("http://localhost:3333/User").then((response) => {
      setDataUser(response.data);
    });
  };

  

 const addUser = () => {
  Axios.post("http://localhost:3333/create",{
    name : name,
    email : email,
    password : password 

  }).then(()=>{
    setDataUser([
      ...DataUser,
      {
        name : name,
        email : email,
        password : password 
      },
    ]);

  });

 };
  return (
    <div className="App">
      <img src={backimg}  alt='backimg' className='backimg'/>
      <div className='block-black'></div>
       <div className='container'>
      
       <div className='form-insert'>
       <h1>INSERTFORM</h1>
       <form>
        <div>
          <div><label>Username:</label></div>
          <input type="text" placehoder="Username" onChange={(event)=>{
            setName(event.target.value)
          }}/>
        </div>
        
        <div>
          <div><label>Email:</label></div>
          <input type="text" placehoder="Email" onChange={(event)=>{
            setEmail(event.target.value)
          }}/>
        </div>
        <div>
          <div><label>Password:</label></div>
          <input type="password" placehoder="Password" onChange={(event)=>{
            setPassword(event.target.value)
          }}/>
        </div>
        <div>
            <button onClick={addUser}>SAVES</button>
        </div>
       </form>
       </div>
      <div className="show-form">
        <button class="btn btn-primary" onClick={getUsers}>
          Show Employees
        </button>
        <br />
        <br />
        <div className="show-data">
          <div className='thead'>
            <div><b>Username</b></div>
            <div><b>Email</b></div>
            <div><b>Password</b></div>
          </div>
        {DataUser.map((val, key) => {
          return (
              <div className="card-body ">
                <div className='dataname show'> {val.Username}</div>
                <div className='dataemail show'> {val.Email}</div>
                <div className='datapassword show'>{val.Password}</div>
              </div>
            
          );
        })}
        </div>
      </div>

       </div>
      
    </div>
    
  );
}

export default App;
