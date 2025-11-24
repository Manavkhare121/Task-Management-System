import React, { useState, useContext } from "react";
import Arrow_icon from "../../assets/Arrow icon.png";
import "./TaskPage.css";
import { TaskContext } from "../../Context/TaskContext.jsx";
import { ProfileContext } from "../../Context/ProfileContext.jsx";

const TaskPage = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { profiles } = useContext(ProfileContext);
  const [showFields, setShowFields] = useState({
    employee: false,
    task: false,
    deadline: false,
    description: false,
  });

  const [taskData, setTaskData] = useState({
    employee: "",
    task: "",
    deadline: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleArrowClick = (field) => {
    setShowFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleAddOrEdit = () => {
    if (!taskData.employee || taskData.employee === "Employee") {
      alert("Please select an employee before assigning the task.");
      return;
    }

    if (isEditing) {
      const updated = [...tasks];
      updated[editIndex] = taskData;
      setTasks(updated);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTasks([...tasks, taskData]);
    }

    setTaskData({ employee: "", task: "", deadline: "", description: "" });
    setShowFields({ employee: false, task: false, deadline: false, description: false });
  };

  const handleEdit = (index) => {
    setTaskData(tasks[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <>
      <div className="maincontent">
        <div className="content-section">
          <div className="above-part">
            <p>Add Task</p>
          </div>
          <div className="bottom-part">
            {["employee", "task", "deadline", "description"].map((field) => (
              <div className="whole-section" key={field}>
                <div className={`box ${showFields[field] ? "active" : ""}`}>
                  <div className="box-header" onClick={() => handleArrowClick(field)}>
                    <h1>
                      {field === "employee"
                        ? "Select Employee"
                        : field.charAt(0).toUpperCase() + field.slice(1)}
                    </h1>
                    <img
                      src={Arrow_icon}
                      alt=""
                      className={`arrow-icon ${showFields[field] ? "rotate" : ""}`}
                    />
                  </div>

                  {showFields[field] &&
                    (field === "employee" ? (
                      <select name="employee" value={taskData.employee} onChange={handleChange}>
                        <option>Employee</option>
                        {profiles.map((profile, index) => (
                          <option key={index} value={profile.Name}>
                            {profile.Name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field === "deadline" ? "date" : "text"}
                        name={field}
                        value={taskData[field]}
                        onChange={handleChange}
                        placeholder={`Enter ${field}`}
                      />
                    ))}
                </div>
              </div>
            ))}

            <div className="add-icon" onClick={handleAddOrEdit}>
              <p>{isEditing ? "Update" : "Add"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="below-part-TaskPage">
        <div className="entries">
          <div className="table-menu-TaskPage">Task Name</div>
          <div className="table-menu-TaskPage">Employee Name</div>
          <div className="table-menu-TaskPage">Deadline</div>
          <div className="table-menu-TaskPage">Status</div>
          <div className="table-menu-TaskPage">Options</div>
        </div>
        <div className="profilescroll-TaskPage">
          {tasks.map((task, index) => (
            <div className="below-part-TaskPage hidde" key={index}>
              <div className="table-menu-TaskPage">{task.task}</div>
              <div className="table-menu-TaskPage">{task.employee}</div>
              <div className="table-menu-TaskPage">{task.deadline}</div>
              <div className="table-menu-TaskPage">{task.description}</div>
              <div className="table-menu-TaskPage">
                <div className="options-icon">
                  <button className="add-icon" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button
                    className="add-icon"
                    onClick={() => handleDelete(index)}
                    style={{ backgroundColor: "#DC143C" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskPage;

