import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    async function getTodos() {
      const response = await fetch("http://localhost:3001/api/todos");
      const todos = await response.json();
      
      console.log(todos);
    }

    getTodos();
  }, []);

  return (
    <main className="container">
      <h1>Hello world!</h1>
    </main>
  );
}