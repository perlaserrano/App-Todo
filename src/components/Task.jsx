

const Task = ({task,setTask,deleteTask,editTask}) =>{
    const {taskValue,date,comment, id} = task

    const handleDelete = () => {
        const answer = confirm('Do you want to delete this patient?')
        if (answer) {
            deleteTask(id)
            
        }
    }

    const handleEdit = () =>{
        const answerEdit = confirm('Are you sure you want to edit this task?')
        if (answerEdit) {
            editTask(id)
        }
    }




   
    return(
        <>
 <div className="mx-5 my-10 m-3 px-5 py-10 rounded-xl bg-white shadow-md">
    <div className="mb-5 flex">
    <p className="font-bold mb-3 text-gray-700 uppercase ">
        Task: {" "}
        <span className="font-normal normal-case">{taskValue}</span>
    </p>
    </div>
    <div className="mb-5 flex">
    <p className="font-bold mb-3 text-gray-700 uppercase">
       Date: {" "}
        <span className="font-normal normal-case">{date}</span>
    </p>
    </div>
    <div className="mb-5 flex">
    <p className="font-bold mb-3 text-gray-700 uppercase">
       Comment: {" "}
        <span className="font-normal normal-case">{comment}</span>
    </p>

    </div>

    <div className="flex justify-between mt-10">
        <button onClick={handleEdit} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" type="button">Edit</button>
        <button onClick={handleDelete} className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" type="button">Delete</button>
    </div>
</div>
        
        </>
    )
}

export default Task;