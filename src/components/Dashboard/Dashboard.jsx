import "./Dashboard.css";
import Arrow_icon from "../../assets/Arrow icon.png";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../Context/TaskContext";

const Dashboard = () => {
  const { tasks } = useContext(TaskContext);
  const [localTasks, setLocalTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setLocalTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setLocalTasks(tasks);
  }, [tasks]);

  const completed = localTasks.filter(
    (task) => task.description.toLowerCase() === "completed"
  );
  const due = localTasks.filter(
    (task) => task.description.toLowerCase() === "pending"
  );
  const ongoing = localTasks.filter(
    (task) =>
      task.description.toLowerCase() !== "completed" &&
      task.description.toLowerCase() !== "pending"
  );

  return (
    <>
      <div className="maincontent">
        <div className="content-section">
          <div className="above-part">
            <p>Project Overview</p>
          </div>
          <div className="bottom-part">
            <div className="box">
              <h1>Total Project</h1>
              <img src={Arrow_icon} alt="" height="5px" />
            </div>
            <div className="box">
              <h1>Ongoing</h1>
              <img src={Arrow_icon} alt="" height="5px" />
            </div>
            <div className="box">
              <h1>Completed Task</h1>
              <img src={Arrow_icon} alt="" height="5px" />
            </div>
            <div className="box">
              <h1>Due Task</h1>
              <img src={Arrow_icon} alt="" height="5px" />
            </div>
          </div>
        </div>
      </div>

      <div className="below-part">
        <div className="table-menu">Total Projects: {localTasks.length}</div>
        <div className="table-menu">
          Ongoing: {ongoing.length}
          <div className="alignment">
            {ongoing.map((task, index) => (
              <p key={index}>
                👤 {task.employee} — 📌 {task.task}
              </p>
            ))}
          </div>
        </div>
        <div className="table-menu">
          Completed: {completed.length}
          {completed.map((task, index) => (
            <p key={index}>
              👤 {task.employee} — 📌 {task.task}
            </p>
          ))}
        </div>
        <div className="table-menu">
          Due: {due.length}
          <div className="alignment">
            {due.map((task, index) => (
              <p key={index}>
                👤 {task.employee} — 📌 {task.task}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
