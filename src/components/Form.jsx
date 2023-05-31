import Error from "./Error";
import { useState } from "react";

const saveId = () => {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);
  return date + random;
};

function Form({ tasks, setTasks, task, setTask,editMode,setEditMode }) {
  const [error, setError] = useState(false)



  const handleSubmit = (e) => {
    e.preventDefault();


    if (task.id) {
      const taskUpdate = tasks.map((taskState) =>
        taskState.id === task.id ? task : taskState
      );
      setTasks(taskUpdate);
      setEditMode(false);
      setTask({});
      setError(false);
    } else {
      setError(true);
      setTasks([...tasks, { ...task, id: saveId() }]);
    }
    


    // if (task.id) {
    //   task.id = task.id
    //   const taskUpdate = task.map((taskState) => (taskState.id === task.id ? task : taskState));
    //   setTasks(taskUpdate);
    //   setEditMode(true)
    //   setTask({})
    //   setError(false)
    // } else {
    //    setError(true) 
    //   setTasks([...tasks, { ...task, id: saveId() }]);
    // }
    // setTask({
    //     taskValue: "",
    //     date: "",
    //     comment: "",
    //     id: "",
    // });


     


    
  };



  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 px-5  mx-5">
        <form onSubmit={handleSubmit} className=" bg-white shadow-md rounded-md py-10 px-5 mb-5">
        {error && <Error>All fields are required</Error> }
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="task">
              Task
            </label>
            <input
              id="todo"
              type="text"
              placeholder="Add to new todo"
              className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md"
              value={task.taskValue}
              onChange={(e) => setTask({ ...task, taskValue: e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="date">
              Date
            </label>
            <input
              id="date"
              type="date"
              className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md"
              placeholder="Add date"
              value={task.date}
              onChange={(e) => setTask({ ...task, date: e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 uppercase font-bold" htmlFor="comment">
              Comment
            </label>
            <textarea
              className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md"
              name=""
              id="comment"
              placeholder="Add Comments"
              cols="30"
              rows="10"
              value={task.comment}
              onChange={(e) => setTask({ ...task, comment: e.target.value })}
            />
          </div>

          <input value={editMode ? 'Edit Task' : 'Send'} type="submit" className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"></input>
        </form>
      </div>
    </>
  );
}

export default Form;
