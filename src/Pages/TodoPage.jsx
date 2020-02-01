import React, { useState } from 'react';
import todoAPI from '../services/todoAPi';

const TodoPage = (props) => {

    const [todoList, setTodoList] = useState(todoAPI.getTodos());
    const [todo, setTodo] = useState([]);
    
    const handleChange = ({currentTarget}) => {
        setTodo([currentTarget.value]);
    };

    const handleDelete = k => {
        const copyTodoList= [...todoList]
        if (k !== -1) {
         copyTodoList.splice(k, 1);
         todoAPI.deleteTodo(k);
        }
        setTodoList(copyTodoList);
       
    };

    const handleSubmit = event =>{
        event.preventDefault();
        todoAPI.setTodo(todo);
        if(todoList){
            setTodoList(todoList.concat(todo));
        }
        setTodoList(todoAPI.getTodos());
    };

return (
        <>
         <form onSubmit={handleSubmit} >
            <div className="form-group">
            <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Ajouter une tâche</label>
             <input className="form-control form-control-lg"
                     value={todo}
                      type="text" 
                       placeholder="Exemple : Acheter du pain..." 
                       id="inputLarge"
                        onChange={handleChange}
                    /> 
               </div>
          </form>
        <ul>
          {todoList && (
              todoList.map((todos, k)  =>  (
            <li key={k}>
             <a href="#">
             <button onClick={() => handleDelete(k)} type="button" className="close" data-dismiss="alert">&times;</button>
             <h2>Title #1</h2>
              <p>{todos}</p>
              </a>
            </li>
            ))
          )}
      </ul>
     </>
   );
} 
export default TodoPage;