import React, { useState } from "react";
import "./task.css";

function Task() {
  const [task, setTask] = useState("");
  const [updatedList, setUpdatedList] = useState([]);

  // Adding new tasks -->
  const addTask = () => {
    if (task !== "") {
      setUpdatedList([...updatedList, task]);
      setTask("");
    }
    else {
      alert("Please mention a task")
    }
  };

  // Removing the selected tasks only -->
  const removeTask = (i) => {
    let filteredTask = updatedList.filter((element, id) => {
      return id !== i;
    });
    setUpdatedList(filteredTask);
  };

  // Removing all the tasks -->
  const removeAll = () => {
    setUpdatedList([]);
  };

  return (
    <div className="container">
      <h1 className="h1">TODO LIST📝</h1>
      <div className="inputs">
        <input
          id="input-box"
          type="text"
          placeholder="Add task here ...🖋"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button id="add-btn" className="btn" onClick={addTask}>
          Add
        </button>
      </div>

      {updatedList.map((el, i) => {
        return (
          <div className="tasks" key={i}>
            <ul>
              <li>
                <p>{el}</p>
              </li>
            </ul>
            <button
              id="remove-btn"
              className="btn"
              onClick={() => removeTask(i)}
            >
              ❌
            </button>
          </div>
        );
      })}

      {/* remove all */}
      {updatedList.length > 0 ? (
        <button id="remove-all-btn" className="btn" onClick={removeAll}>
          Remove all
        </button>
      ) : null}
    </div>
  );
}

export default Task;
