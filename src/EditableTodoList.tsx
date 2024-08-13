import { useState } from 'react';

function EditableTodoList() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<string[]>([]);

  function addTask(e) {
    e.preventDefault();

    if (!task.trim()) return;
    if (taskList.includes(task)) {
      alert(`The task '${task}' is a duplicate.`);
      return;
    }

    const newTaskList = [
      task,
      ...taskList
    ];

    setTaskList(newTaskList);
    setTask('');
  }

  return (
    <>
      <form onSubmit={addTask}>
        <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
        <button type='submit'>
          Add Task
        </button>
      </form>

      <ul>
        {taskList.map((task, index) => 
          <Task key={index} initialTask={task} />
        )}
      </ul>
    </>
  )
}

interface TaskProps {
  initialTask: string;
}

const Task: React.FC<TaskProps> = ({ initialTask }) => {
  const [editable, setEditable] = useState(false);
  const [task, setTask] = useState(initialTask);

  return (
    <li onClick={() => setEditable(!editable)}>
      {editable ? (
        <input type='text' value={task} onChange={(e) => setTask(e.target.value)}/>
      ): (
        <span>{task}</span>
      )}
    </li>
  )
}


// State for individual
// State for task list

// Add input field
// Add input button
// ul
  // map over tasks
  // li for Task component (index as key)


// Task component
// state value
// Clicking converts active state
// blurring or hitting enter saves
// Lift state up?


export default EditableTodoList