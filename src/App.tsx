import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<string[]>([]);

  function addTask(e) {
    e.preventDefault();

    const newTaskList = [
      task,
      ...taskList,
    ];

    setTaskList(newTaskList);
    setTask('');
  }
  
  function deleteTask(taskToDelete: string) {
    const newTaskList = taskList.filter(task => {
      return task !== taskToDelete;
    });

    setTaskList(newTaskList);
  }

  return (
    <>
      <h1>Basic To-Do List</h1>

      <form onSubmit={addTask}>
        <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
        <button type='submit'>Add Task</button>
      </form>

      <ul>
        {taskList.map((task, index) => 
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(task)}>X</button>
          </li>
        )}
      </ul>
    </>
  )
}


// Current task
// List of tasks
// Add handler
// Delete handler
// form
  // Input w/ state for task
  // Submit button—append to end of list
// ul
  // map over list
  // key = index
  // text = task
  // delete button

export default App
