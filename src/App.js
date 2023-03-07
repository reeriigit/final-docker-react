import './App.css';
import {useState } from "react";
import Axios from "axios";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const [DataUser, setDataUser] = useState([]);

  const getUsers = () => {
    Axios.get("http://localhost:3333/User").then((response) => {
      setDataUser(response.data);
    });
  };

 const addUser = () => {
  Axios.post("http://localhost:3333/create",{
    fname : fname,
    lname : lname,
    gmail : gmail,
    password : password

  }).then(()=>{
    setDataUser([
      ...DataUser,
      {
        fname : fname,
        lname : lname,
        gmail : gmail,
        password : password },
    ]);

  });

 };
  return (
    <div className="App">
       <h1>INSERTFORM</h1>
       <div>
       <form>
        <div>
          <label>FNAME:</label>
          <input type="text" placehoder="INPUT FNAME" onChange={(event)=>{
            setFname(event.target.value)
          }}/>
        </div>
        <div>
          <label>LNAME:</label>
          <input type="text" placehoder="INPUT LNAME" onChange={(event)=>{
            setLname(event.target.value)
          }}/>
        </div>
        <div>
          <label>GMAIL:</label>
          <input type="text" placehoder="INPUT GMAIL" onChange={(event)=>{
            setGmail(event.target.value)
          }}/>
        </div>
        <div>
          <label>PASSWORD:</label>
          <input type="text" placehoder="INPUT PASSWORD" onChange={(event)=>{
            setPassword(event.target.value)
          }}/>
        </div>
        <div>
            <button onClick={addUser}>SAVES</button>
        </div>
       </form>
       </div>
       <hr/>
       <hr />
      <div className="employees">
        <button class="btn btn-primary" onClick={getUsers}>
          Show Employees
        </button>
        <br />
        <br />
        {DataUser.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">Name: {val.fname}</p>
                <p className="card-text">Age: {val.lname}</p>
                <p className="card-text">Country: {val.gmail}</p>
                <p className="card-text">Position: {val.password}</p>
                
              </div>
            </div>
          );
        })}
      </div>

      
    </div>
    
  );
}

export default App;
