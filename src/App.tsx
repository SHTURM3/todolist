import React from 'react';

import {Header} from './components/Header/Header';
import { Main } from './components/Main/Main';
import { TasksList } from './components/TasksList/TasksList';

import './App.css';

const list = [
  {
    id: 1,
    name: 'Smth name',
    description: 'Snth description',
    checked: false,
  },
  {
    id: 2,
    name: 'Smth name',
    description: 'Snth description',
    checked: false,
  },
  {
    id: 3,
    name: 'Smth name',
    description: 'Snth description',
    checked: true,
  },
];

type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

const App = () => {

  // Стейт с тасками
  const[todos, setTodos] = React.useState(list);

  //Стейт с id выбранного таска для дальнейшего его редактирования
  const [taskId, setTaskId] = React.useState<Todo['id'] | null>(null);

  // Добавление таска
  const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'> ) => {
    setTodos([...todos, {
      id: todos[todos.length - 1].id + 1, 
      description, 
      name, 
      checked : false}])
  };

  // Удаление таска
  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Отметить таск как завершенный или наоборот (это не тоже самое что и удалить таск)
  const checkTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id) {
          return {...todo, checked: !todo.checked };
        }

        return todo;
      })
    );
  };

  // Редактирование таска
  const selectTaskIdForEdit = (id: Todo['id']) => {
    setTaskId(id);
  };

  const changeTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === taskId) {
          return {...todo, name, description };
        }

        return todo;
      })
    );
    setTaskId(null);  
  };

  return (
    <div className="App">
      <Header 
        todoCount = {todos.length}
      />

      <Main
        mode='add' 
        addTodo={addTodo}
      />

      <TasksList 
        tasks={todos}
        taskId={taskId}
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
        selectTaskIdForEdit={selectTaskIdForEdit}
        changeTodo={changeTodo}
      />
    </div>
  );
};

export default App;
