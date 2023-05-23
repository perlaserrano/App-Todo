import Header from "./components/Header"
import Form from "./components/Form"
import ListTask from "./components/ListTask"
import { useState } from "react"

function App() {
 const [tasks,setTasks] = useState([])
const [addedTasks,setAddedTasks] = useState({})

  return (
    <>
    <div className="container">
      <Header/>
      <div className="mt-12 flex justify-center">
     <Form tasks={tasks} setTasks={setTasks} addedTasks={addedTasks} setAddedTasks={setAddedTasks}/>
     <ListTask setAddedTasks={setAddedTasks} tasks={tasks}/>
      </div>

    </div>
  
    </>
  )
}

export default App
