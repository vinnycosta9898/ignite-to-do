import { useState } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

export interface ITask{
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "1",
      title: "Teste",
      isCompleted: true
    }
  ]);

  function handleAddTask(taskTitle: string){
    setTasks([
      ...tasks, 
      { 
        id: crypto.randomUUID(),
        title: taskTitle, 
        isCompleted: false
      }])
  }

  function handleDeleteTask(taskId: string){
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function handleCompletedTask(taskId: string){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasks(newTasks);
  }
  return (
    <>
      <Header onAddTask={handleAddTask}/>
      <Tasks 
        tasks={tasks} 
        onDelete={handleDeleteTask}
        onCompleted={handleCompletedTask}
      />
    </>
  )
}

export default App
