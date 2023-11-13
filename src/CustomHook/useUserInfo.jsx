import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
const useUserInfo = ()=>{
   const { user } = useContext(AuthContext);
   const [userInfo,setUserInfo] = useState({});

   //Effect
     useEffect(()=>{ 
       if(user){  
          axios.post('http://localhost:5000/findUserByEmail',{'email':user?.email})
    .then(res=>{
        setUserInfo(res.data);
         // console.log("user info  ",res.data);
    })
    .catch(err=>console.log(err));
       }
   },[user?.email]) 
   
    const name = userInfo?.name; 
    const photoURL = userInfo?.photoURL; 
    const email = userInfo?.email;
    const userId = userInfo?._id;
    const role = userInfo?.role;
    const phone = userInfo?.phone;
    const address = userInfo?.address;

   
    
  return {userId,email,name,photoURL,role,phone,address};
}
export default useUserInfo;