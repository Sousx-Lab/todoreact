import React, { useState } from 'react';
import todoAPI from '../services/todoAPi';

const TodoPage = (props) => {

    const [todoList, setTodoList] = useState(todoAPI.getTodos());

    const [newTodo, setNewTodo] = useState([]);
    
    const handleChange = ({currentTarget}) => {
        setNewTodo([currentTarget.value]);
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
        if(newTodo[0].length > 0) todoAPI.setTodo(newTodo);
        if(todoList) setTodoList(todoList.concat(newTodo));
        setTodoList(todoAPI.getTodos());
    };

return (
        <>
         <form onSubmit={handleSubmit} >
            <div className="form-group">
            <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Ajouter une tâche</label>
             <input className="form-control form-control-lg"
                    name="content"
                     value={newTodo}
                      type="text" 
                       placeholder="Exemple : Acheter du pain..." 
                       id="inputLarge"
                        onChange={handleChange}
                    /> 
               </div>
          </form>
        <ul >
          {todoList && (
              todoList.map((todo, k) =>  (
            <li key={k} >
             <div className="todo">
             <button onClick={() => handleDelete(k)} type="button" className="close" data-dismiss="alert">&times;</button>
              <p className="btn btn-link" >{todo}</p>
              </div>
            </li>
            ))
          )}
        </ul>
     </>
   );
} 
export default TodoPage;