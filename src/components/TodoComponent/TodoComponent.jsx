import { useState, useEffect } from 'react';
import axios from 'axios';

const TodoComponent = () => {
    const [todoList, setTodoList] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const completed = "https://static-00.iconduck.com/assets.00/process-completed-symbolic-icon-2048x2048-baquwdk1.png";
    const unCompleted = "https://as1.ftcdn.net/v2/jpg/00/08/37/08/1000_F_8370831_pjgOukKlNV27vADLsCCCqh4ij8esWqfB.jpg";

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response.data)
                setTodoList(response.data)
            })
            .catch(error => {
                setErrorMsg(error.message)
                console.log(error)
            });
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <h1 className="text-center mt-3 mb-3">Todo List</h1>
                <ul className="list-group">
                    {todoList.map(todo => (
                        <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                            <span className="text-capitalize fw-bold">{todo.title}</span>
                            {
                                todo.completed ? <img src={completed} alt="" style={{ maxWidth: 40 }} />
                                    : <img src={unCompleted} alt="" style={{ maxWidth: 40 }} />
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoComponent;
