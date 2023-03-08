// // import { number } from 'prop-types'
// import { useState,useEffect} from 'react';
// import Axios from "axios";
// const Login =(props)=>{

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [DataUser, setDataUser] = useState([]);


//   const addUser = () => {
//     Axios.post("http://localhost:3333/create",{
//       name : name,
//       email : email,
//       password : password 
  
//     }).then(()=>{
//       setDataUser([
//         ...DataUser,
//         {
//           name : name,
//           email : email,
//           password : password 
//         },
//       ]);
  
//     });
  
//    };

//     return(
//         <div>
//             <form onSubmit={saveItem}>
//                 <div className="form-control">
//                     <label>ชื่อรายการ</label>
//                     <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title} />
//                 </div>
//                 <div className="form-control">
//                     <label>ชจำนวนเงิน</label>
//                     <input type="number" placeholder="(+ รายรับ,- รายจ่าย)" onChange={inputAmout} value={amout} />
                    
//                 </div>
//                 <div>
//                     <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
//                 </div>
//             </form>
//         </div>
//     )
// }
// export default FromComponent