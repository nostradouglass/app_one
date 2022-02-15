

import React from 'react'
import UserCard from '../../components/UserCard'
import { MongoClient } from 'mongodb';

export default function ShowUsers(props) {
  return (
    <div>
      <h1>Show Users</h1>
      {props.users.map((user) => {
        return <UserCard key={user.id} email={user.email} firstName={user.firstName} lastName={user.lastName} id={user.id} />
      })}

    </div>
  )
}


export async function getStaticProps() {

  const client = await MongoClient.connect(`mongodb+srv://nextjs:nextjs-course-pass84@cluster0.ctnrv.mongodb.net/app_one?retryWrites=true&w=majority`);
  const db = client.db();
  const usersCollection = db.collection('users');
  const users = await usersCollection.find().toArray();

  return {
    props: {
      users: users.map((user) => {
        return {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          id: user._id.toString()
        }
      })
    },
    revalidate: 10
  }
}