import { useEffect, useState } from 'react'
import useUserInfo from '../../../CustomHook/useUserInfo'
import axios from 'axios';

export default function ProfilePage() {   

    const {userId} = useUserInfo();
    const [userInfo,setUserInfo] = useState({});

    useEffect(()=>{
        axios.post('http://localhost:5000/getUserInfo',{userId})
        .then((res)=>{
            setUserInfo(res.data)
            // console.log("user data => ",res.data)
        })
        .catch(err=>console.log(err));
    },[userId])

  return (
    <div className='flex flex-col'>
      <div className="flex flex-row my-5">
        <h2 className='me-5'> Name : {userInfo.name}</h2>
        <h2>Email : {userInfo.email}</h2>
      </div>
      <div className="flex flex-row my-5">
        <h3 className='me-5'>Address: {userInfo.address}</h3>
        <h3>Phone : {userInfo.phone}</h3>
      </div>
      <div className='flex flex-row my-5'>
        <h3 className='me-5'>Role : {userInfo.userRole}</h3>
        <h3>Total Money : {userInfo.totalMoney}</h3>
      </div>
    </div>
  )
}
