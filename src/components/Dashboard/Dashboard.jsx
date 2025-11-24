import "./Dashboard.css";

import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../Context/TaskContext.jsx";

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
      <div className="maincontent-Dashboard">
        <div className="content-section-Dashboard">
          <div className="above-part">
            <p>Project Overview</p>
          </div>
          <div className="bottom-part-Dashboard">
            <div className="box-Dashboard">
              <h1>Total Project</h1>
              <div className="table-menu"> {localTasks.length}</div>
            </div>
            <div className="box-Dashboard">
              <h1>Ongoing</h1>
              <div className="table-menu">
                {ongoing.length}
                <div className="alignment">
                  {ongoing.map((task, index) => (
                    <p key={index}>
                      👤 {task.employee} — {task.task}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="box-Dashboard">
              <h1>Completed Task</h1>

              <div className="table-menu">
                {completed.length}
                {completed.map((task, index) => (
                  <p key={index}>
                    👤 {task.employee} — {task.task}
                  </p>
                ))}
              </div>
            </div>
            <div className="box-Dashboard">
              <h1>Due Task</h1>

              <div className="table-menu">
                {due.length}
                <div className="alignment">
                  {due.map((task, index) => (
                    <p key={index}>
                      👤 {task.employee} — {task.task}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Dashboard;
