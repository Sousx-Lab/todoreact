
function setTodo(todo){
    const currentTodo = getTodos();
    if(currentTodo){
       const addTodo = currentTodo.concat(todo);
       window.localStorage.setItem("todo", JSON.stringify(addTodo));
    }else
    window.localStorage.setItem("todo", JSON.stringify(todo));
}

function getTodos(){
    const todo = JSON.parse(window.localStorage.getItem("todo"));
    if(todo){
        return todo;
    }
}

function deleteTodo(index){
    const currentTodo = getTodos();
    if(index !== -1){
        currentTodo.splice(index, 1);
        window.localStorage.removeItem("todo")
    }
    setTodo(currentTodo);
}


export default {
    setTodo,
    getTodos,
    deleteTodo
}