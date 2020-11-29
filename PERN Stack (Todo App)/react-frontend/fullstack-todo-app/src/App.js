import { useState } from "react";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState("No response");
  const [todo, setTodo] = useState("");
  const data = {
    description: todo,
  };

  const postRequest = () => {
    fetch("http://localhost:5000/todos", {
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
      </form>

      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default App;
