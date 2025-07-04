import React, { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  const [profiles, setProfiles] = useState(() => {
    const stored = localStorage.getItem('profiles');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }, [profiles]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, profiles, setProfiles }}>
      {children}
    </TaskContext.Provider>
  );
};
