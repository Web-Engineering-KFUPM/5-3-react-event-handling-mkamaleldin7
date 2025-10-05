import React from "react";
import TaskItem from "./TaskItem";
import { useState } from "react";



export default function TaskList({ tasks, onDelete }) {

  return (
    <ul className="list">
      {/* Placeholder */}

        {tasks.length == 0 ? (
        <li className="item item--placeholder">No tasks yet</li>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} id={task.id} text={task.text} onDelete={() => onDelete(task.id)} />
        ))
      )}
      {/* Task 2 & 3 – Map tasks to TaskItem */}
      
    </ul>
  );
}
