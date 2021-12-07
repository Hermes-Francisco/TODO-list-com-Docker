import axios from "axios";
import "./Task.css";

function Task(props) {
  async function remove() {
    console.log(props)
    axios.delete(`http://localhost:8080/task/${props._id}`).then(
      window.location.reload()
    );
  }

  return (
    <div className="Task">
        <div className="Task-title">{props.title}</div>
        <div className="Task-body">{props.body}</div>
        <button onClick={remove}>Deletar</button>
    </div>
  );
}

export default Task;
