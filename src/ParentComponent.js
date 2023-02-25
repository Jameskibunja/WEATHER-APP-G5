import React, { useState, useEffect } from "react";

function ParentComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/petersamson-kingori/project-databse/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

function AddTaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      const taskId = Math.floor(Math.random() * 10000) + 1;
      const task = { id: taskId, title: newTask };
      fetch("https://my-json-server.typicode.com/petersamson-kingori/project-databse/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      })
        .then((response) => response.json())
        .then((data) => {
          onAddTask(data);
          setNewTask("");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function TaskList({ tasks, onDeleteTask }) {
  const handleDeleteTask = (taskId) => {
    fetch(`https://my-json-server.typicode.com/petersamson-kingori/project-databse/tasks/${taskId}`, {
      method: "DELETE",
    }).then(() => onDeleteTask(taskId));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}{" "}
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ParentComponent;