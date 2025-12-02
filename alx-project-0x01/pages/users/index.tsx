import Header from '@/components/layout/Header';
import React from 'react';
import { UserProps, UsersPageProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';


const Users: React.FC<UsersPageProps> = ( { users } ) => {
    console.log(users);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-4">
        <div className='flex justify-between'>
            <h1 className='text-2xl font-semibold'>User Contents</h1>
            <button className='bg-gray-700 px-4 py-2 rounded-full text-white'>Add User</button>
        </div>
        <div className='grid grid-cols-3 gap-4'>
            {
                users?.map((user, key) => (
                    <UserCard 
                        name={user.name} 
                        username={user.username} 
                        email={user.email} 
                        id={user.id} 
                        address={user.address} 
                        phone={user.phone} 
                        website={user.website} 
                        company={user.company} 
                        key={key} 
                    />
                ))
            }
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      users: posts
    }
  }
}
export default Users;