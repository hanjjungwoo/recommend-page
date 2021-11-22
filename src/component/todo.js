import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  return (
    <ul>
      {todo.map((value, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              const temp = [...todo];
              temp[index].clear = true;
              setTodo(temp);
            }}
          >
            <span
              style={{
                ...(value.clear && {
                  color: "#999",
                  textDecoration: "line-through"
                })
              }}
            >
              {value.title}
            </span>
          </li>
        );
      })}
      <li>
        <input
          type="text"
          onKeyUp={(event) => {
            const title = event.target.value;
            if (event.key === "Enter" && title) {
              setTodo([...todo, { title, clear: false }]);
              event.target.value = "";
            }
          }}
        />
      </li>
    </ul>
  );
};

export default Todo;
