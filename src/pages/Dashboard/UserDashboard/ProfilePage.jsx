import React, { useEffect, useState } from 'react'
import useUserInfo from '../../../CustomHook/useUserInfo'
import axios from 'axios';

export default function ProfilePage() {

    const {userId} = useUserInfo();
    const [userInfo,setUserInfo] = useState({});

    useEffect(()=>{
        axios.post('http://localhost:5000:getUserInfo',{userId})
        .then((res)=>{
            setUserInfo(res.data)
        })
        .catch(err=>console.log(err));
    },[userId])

  return (
    <div>ProfilePage</div>
  )
}
