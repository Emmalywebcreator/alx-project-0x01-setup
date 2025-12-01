import Header from '@/components/layout/Header';

const Users: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-semibold mb-4">User List</h1>
        <p>This is the users page. User details will be displayed here.</p>
      </main>
    </div>
  )
}

export default Users;