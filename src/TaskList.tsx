interface Task{
  id: number;
  title: string;
  done: boolean;
}

const tasks: Task[] = [
  { id: 1, title: "Apprendre TS", done: false },
  { id: 2, title: "Coder en React", done: true },
];


function TaskList() {
  return (
    <ul>
      {tasks.map(task => ( 
        <li key = {task.id}>
          {task.title} - {task.done ? "✅" : "❌"}
        </li>
      ))}
    </ul>
  )
}

export default TaskList;
