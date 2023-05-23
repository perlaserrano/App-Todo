import { useEffect, useState } from "react";


function Form({tasks,setTasks,addedTasks,setAddedTasks}){
    const [task,setTask] = useState(' ')
    const [date,setDate] = useState(' ')
    const [comment,setComment] = useState(' ')

    useEffect(()=>{
     if (Object.keys(tasks).length > 0) {
        setTask(tasks.task);
        setDate(tasks.date);
        setComment(tasks.comment);
        
     }   

    },[tasks])




    const handleSubmit = (e) =>{
        e.preventDefault();

      if ([task,date,comment].includes(' ')) {
        
      }

        const objectTask = {
            task,
            date,
            comment
        }
  
console.log(objectTask);

    }

return(
    <>
    <div className="md:w-1/2 lg:w-2/5 px-5  mx-5">

    <form onSubmit={handleSubmit} className=" bg-white shadow-md rounded-md py-10 px-5 mb-5">
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="task">Task</label>
                    <input id="todo" type="text" placeholder="Add to new todo" className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md" value={task} onChange={(e) => setTask(e.target.value) } />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="date">Date</label>
                    <input id="alta" type="date"  className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md"placeholder="Add date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="comment">Comment</label>
                    <textarea  className="border-2 w-full p-2 mt-2
                    placeholder-gray-400 rounded-md"  name="" id="comment" placeholder="Add Comments" cols="30" rows="10" value={comment} onChange={(e) => setComment(e.target.value)}/>
                   
                </div>

            <button className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors">Send</button>
            </form>

    </div>
    </>
)

}

export default Form;