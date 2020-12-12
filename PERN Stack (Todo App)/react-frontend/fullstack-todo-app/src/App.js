import { useState } from "react";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState("No response");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const url = "http://localhost:5000/todos";
  const data = {
    description: todo,
  };

  const getTodos = () => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => setTodos(data));
  };
  console.log(todos);
  const postRequest = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <div>Enter Todo:</div>
      <form>
        <input
          type="text"
          value={todo}
          placeholder="Add Todo..."
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            postRequest();
          }}
        >
          POST Todo
        </button>
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            getTodos();
          }}
        >
          GET TODOS
        </button>
      </form>

      <pre>{JSON.stringify(response, null, 2)}</pre>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default App;
