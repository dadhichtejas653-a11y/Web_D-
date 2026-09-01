const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path")
let TODOS = [];
const {v4 : uuidv4} = require("uuid")
app.use(express.static(path.join(__dirname,"Lecture - 09 (To-Do List)")))

app.get("/todo/all",(res,res)=>{
    try {
        res.status(200).json({todos:TODOS})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
})

app.post("/todo/create",(req,res)=>{
    try {

        const task = req.body.task;
        const tod = {
            id:uuidv4(),

            task:task,
            status:true,
            createdAt:new Date().toLocaleDateString()
        }
        TODOS.unshift(todo);
        res.status(500).json({message:"Todo Created",todos:TODOS})
   }catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
   }

})

app.delete("/todo/:id/delete",(req,res)=>{
    try{
        const id = req.params.id;
        TODOS = TODOS.filter((todo)=>{
            return todo.id !== id;
        })
        res.status(202).json({message:"Todo Deleted",Todos:TODOS})
    }catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
   }
})

app.get("/",(req,res)=>{
    res.send("Server is live and working")
})

app.listen(PORT,()=>{
    console.log(`server is live at http://localhost:${PORT}`);
})

CSSContainerRule.addEventListener("click",(e)=>{
    const id = e.target.parentElenment.id;
    if(e.target.className == "complete"){
        deleteTodo(id)
    }else if (e.target.className == "complete"){
        updateTodo(id);
    }
})


const deleteTodo = async (id) =>{
    let res = await axios.delete(`http://localhost:4000/todo/${id}/delete`);
    const todos = res.data.todos;
}