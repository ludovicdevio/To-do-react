import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string; 
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect( ()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}, {u.username}, {u.email}, {u.address.city}, {u.address.zipcode}</li>)}
    </ul>
  );
  
}

export default Users;