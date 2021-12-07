import "./Task.css";

function Task(props) {
  return (
    <div className="Task">
        <div className="Task-title">{props.title}</div>
        <div className="Task-body">{props.body}</div>
    </div>
  );
}

export default Task;
