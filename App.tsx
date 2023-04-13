import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';





// let tasks2: Array<TaskType> = [
//   { id: 1, title: 'Terminator', isDone: true },

//   { id: 3, title: 'Extra', isDone: false}
// ];

// let tasks3: Array<TaskType> = [
//   { id: 1, title: 'Apples', isDone: true },
//   { id: 2, title: 'Ice Cream', isDone: true },
//   { id: 3, title: 'Milk', isDone: false }
// ];

export type FilterValuesType = 'all' | 'completed' | 'active';


function App() {

  let [tasks, setTasks] = useState([
  { id: v1(), title: 'CSS', isDone: true },
  { id: v1(), title: 'HTML', isDone: true },
  { id: v1(), title: 'JavaScript', isDone: true },
  { id: v1(), title: 'React', isDone: false },
  { id: v1(), title: 'Redux', isDone: false },
]);
console.log(tasks)


function removeTask(id: string) {
  let filteredTasks = tasks.filter( taska => taska.id !== id) 
  setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let newTask = { 
      id: v1(), 
      title: title, 
      isDone: false 
    };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeStatus(taskId: string, isDone: boolean) {
    let task =  tasks.find( taska => taska.id ===taskId);
    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks]);
  }

function changeFilter(value: FilterValuesType) {
  setFilter(value);

}
let [filter, setFilter] = useState<FilterValuesType>('active');

let tasksForTodolist = tasks;
if (filter === 'completed') {
  tasksForTodolist = tasks.filter(taska => taska.isDone === true);
}
if (filter === 'active') {
  tasksForTodolist = tasks.filter(taska => taska.isDone === false);
}

  return (
    <div className="App">
      <Todolist title='What to learn' 
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={filter}
      />
      {/* <Todolist title='Movies' tasks={tasks2} />
      <Todolist title='Shopping list' tasks={tasks3} /> */}
    </div>
  );
}



export default App;
