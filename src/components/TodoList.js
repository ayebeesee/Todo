import React, {useState} from "react";
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        console.log(newTodos);
        setTodos(newTodos);
    };

    const removeTodo = id => {
        const removedArr = todos.filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        console.log('complete');
        setTodos(updateTodos)
    }

    return (
        <div className="todo-list">
        <h1>What's The Plan For Today?</h1>
        <TodoForm onSubmit={addTodo}></TodoForm> 
          <Todo // 👈 Todo 컴포넌트에는
            todos={todos} // 할 일 데이터
            removeTodo={removeTodo} // 제거함수
            updateTodo={updateTodo} // 수정함수
            completeTodo={completeTodo} // 완료함수를 props로 전달합니다.
        ></Todo>
        </div>
    )
}

export default TodoList