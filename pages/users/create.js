import React from 'react'
import CreateForm from '../../components/CreateForm'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function createUser() {

  const router = useRouter();

  const formHandler = ({email, firstName, lastName}) => {
    axios.post('/api/users', {
      firstName,
      lastName,
      email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    router.push('/')
  }

  return (
    <>

    <CreateForm handleForm={formHandler} />
    </>
  )
}


