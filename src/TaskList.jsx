import React from 'react';
import { useState } from 'react';

function TaskList({ tasks, onDeleteTask, onChangeTask }) {
  return (
    <>
      {tasks.length === 0 ? (
        <h2 className="all-done">Wow, no todo to do</h2>
      ) : (
        tasks.map((task) => {
          return (
            <ul key={task.id}>
              <li key={task.id} className="task-item">
                <Task
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onChangeTask={onChangeTask}
                ></Task>
              </li>
            </ul>
          );
        })
      )}
    </>
  );
}

function Task({ task, onDeleteTask, onChangeTask }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          className="text"
          value={task.text}
          onChange={(e) =>
            onChangeTask({
              ...task,
              text: e.target.value,
            })
          }
        />
        <button className="btn save-btn" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className="text">{task.text}</span>
        <button onClick={() => setIsEditing(true)} className="btn edit-btn">
          Edit
        </button>
      </>
    );
  }
  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          onChangeTask({
            ...task,
            done: e.target.checked,
          })
        }
      />
      {taskContent}
      <button className="btn delete-btn" onClick={() => onDeleteTask(task.id)}>
        DELETE
      </button>
    </>
  );
}

export default TaskList;
