// TypeScript
interface User {
  id: number;
  name: string;
  email?: string; // optionnel
}

const user: User = {
  id: 1,
  name: "Ludovic" ,
  email: "ludovic@example.com"
};


function Test() {


  return (
    <div className="bg-red-500">
      <button className="btn btn-accent">test</button>
      <p>{user.name}</p>
      <p>{user.email ? user.email : "Email non fourni"}</p>
      <p>ID: {user.id}</p>
    </div>
  )
}

 console.log(user);



export default Test;
