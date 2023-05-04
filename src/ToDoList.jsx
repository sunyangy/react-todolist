import React, { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

const initTasks = [
  {
    id: 0,
    text: 'Learn JavaScript',
    done: false,
  },
  {
    id: 1,
    text: 'read book',
    done: true,
  },
  {
    id: 2,
    text: 'learn React',
    done: false,
  },
];
let nextId = 3;
const ADD = 'add';
const EDIT = 'edit';
const DELETE = 'delete';
const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case ADD: {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case DELETE: {
      return tasks.filter((task) => task.id !== action.id);
    }
    case EDIT: {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    default: {
      throw Error('something is Error');
    }
  }
};
function ToDoList() {
  const [tasks, dispatch] = useReducer(tasksReducer, initTasks);
  const handleAddTask = (text) => {
    dispatch({
      type: ADD,
      text,
      id: nextId++,
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: DELETE,
      id,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: EDIT,
      task,
    });
  };
  return (
    <>
      <div className="todoList-container">
        <div className="panel">
          <h2 className="title"> ToDoList</h2>
          <AddTask onAddTask={handleAddTask}></AddTask>
          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onChangeTask={handleChangeTask}
          ></TaskList>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
