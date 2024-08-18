import { FormEvent, useState } from 'react';

interface Task {
  id: number;
  name: string;
  done: boolean;
}

function EditableTodoList() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  function addTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!task.trim()) return;
    if (taskList.filter(item => item.name === task).length > 0) {
      alert(`The task '${task}' is a duplicate.`);
      return;
    };

    const id = Math.floor(Math.random() * 1000000);

    const newTask: Task = {
      id,
      name: task,
      done: false,
    }

    const newTaskList = [
      newTask,
      ...taskList
    ];

    setTask('');
    setTaskList(newTaskList);
  }

  return (
    <>
      <form onSubmit={(e) => addTask(e)}>
        <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
        <button type='submit'>
          Add Task
        </button>
      </form>

      <ul>
        {taskList.map((task) => 
          <Task key={task.id} taskData={task} />
        )}
      </ul>
    </>
  )
}

interface TaskProps {
  taskData: Task;
}

const Task: React.FC<TaskProps> = ({ taskData }) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(taskData.name);
  const [done, setDone] = useState(taskData.done);

  return (
      <li>
        <input type='checkbox' checked={done} onChange={() => setDone(!done)} />
        {editable ? (
          <>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setEditable(false)}>💾</button>
          </>
        ) : (
          <>
            <span>{name}</span>
            <button onClick={() => setEditable(true)}>✏️</button>
          </>
        )}
      </li>
  );
}

export default EditableTodoList
