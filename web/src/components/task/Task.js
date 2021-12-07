import axios from "axios";
import "./Task.css";

function Task(props) {
  async function remove() {
    axios.delete(`http://localhost:8080/task/${props._id}`).then(
      window.location.reload()
    );
  }

  return (
    <div className="Task">
        <h1 className="TaskTitle">{props.title}</h1>
        <p className="TaskBody">{props.body}</p>
        <button className="Delete" onClick={remove}>Deletar</button>
    </div>
  );
}

export default Task;
