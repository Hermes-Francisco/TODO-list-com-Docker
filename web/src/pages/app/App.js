import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from '../../components/task/Task';
import './App.css';

function App() {
  const arr = [];
  const [tasks, setTasks] = useState(arr);

  async function onSubmit (event) {
    event.preventDefault();
    console.log("Enviando!!!");
    console.log();

    const body = {
      title: event.target[0].value,
      body: event.target[1].value
    }


    const response = await axios.post('http://localhost:8080/task', body);
    setTasks([...tasks, response.data]);
  }

  function taskList() {
    return tasks.map((task) => <Task key={task._id} title={task.title} body={task.body}/>);
  }

  return (
    <div className="App">

        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Título"></input>
          <textarea type="text" placeholder="Conteúdo"></textarea>
          <button type="submit">Criar tarefa</button>
        </form>

        {taskList()}

        {/* <Task /> */}
    </div>
  );
}

export default App;
