import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [profiles, setProfiles] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks,profiles, setProfiles  }}>
      {children}
    </TaskContext.Provider>
  );
};