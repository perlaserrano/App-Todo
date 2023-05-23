import Task from "./Task";


const ListTask = ({setAddedTasks,tasks}) =>{
    return (
        <>
        <div className=" h-screen w-screen  prose lg:prose-xl text-8xl text-center bg-indigo-500 shadow-md rounded-md   overflow-y-scroll">
            <h1 className="text-white font-black italic" >Tasks</h1>
            {tasks && tasks.length ? (
                <>
            {tasks.map((task)=>
             <Task 
             task={task}
         setAddedTasks={setAddedTasks}/>     
            )}
             </>
            ) :
              <>
                <h2 className="text-white font-black italic">You have no added tasks</h2>
            <p className="text-white font-black italic">
           Add Todo{' '}
            </p>
            
            </>}


        </div>


        </>
    )
}

export default ListTask;