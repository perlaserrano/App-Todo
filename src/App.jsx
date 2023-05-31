import Header from "./components/Header"
import Form from "./components/Form"
import ListTask from "./components/ListTask"
import { useState } from "react"

function App() {
 const [editMode,setEditMode] = useState(false) 
 const [tasks,setTasks] = useState([])
 const [task, setTask] = useState({
  taskValue: "",
  date: "",
  comment: "",
  id:"",
}); 


const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks); 
  }
}


const editTask = (id) =>{
  const edit = tasks.map(task => task.id !== id)
  if(edit === id) {
    const updateEdit = [...tasks];
    updateEdit.splice(edit, -1);
    setTasks(updateEdit)
    
  }
}


// const deleteTask = (id) => {
//   const index = tasks.findIndex(task => task.id === id);
//   if (index !== -1) {
//     const taskToEdit = tasks[index];
//     setTask(taskToEdit);
//     setEditMode(true);
//     // Eliminar el elemento si es necesario
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index, 1);
//     setTasks(updatedTasks);
//   }
// }




  return (
    <>
    <div className="container">
      <Header/>
      <div className="mt-12 flex justify-center">
     <Form tasks={tasks} setTasks={setTasks} task={task} setTask={setTask}/>
     <ListTask setTask={setTask} tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
      </div>

    </div>
  
    </>
  )
}

export default App
