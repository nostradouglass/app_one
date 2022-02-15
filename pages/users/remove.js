

import React, { useState } from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'

export default function RemoveUser() {

  const router = useRouter();
  
  const [id, setId] = useState("");

  const submitRemoveUser = (e) => {
    e.preventDefault();

    // Remove user 
    axios.delete(`/api/users`, {
      data: { id: id }
    })

    router.push('/users')

  };

  return (
   <form onSubmit={submitRemoveUser}>
     <h3>Remove user</h3>
     <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="enter user id" />
     <button type="submit" >Remove User</button>
   </form>
  )
}
