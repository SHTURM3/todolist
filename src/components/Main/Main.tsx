import React from "react";

import { Button } from "../Button/Button";

import './Main.css';

const item = {
    name: '',
    description: '',
};

type Todo = {
    id: number;
    name: string;
    description: string;
    checked: boolean;
};

interface AddMainProps {
    mode: 'add';
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void;
};

interface EditMainProps {
    mode: 'edit';
    editTodo: Omit<Todo, 'id' | 'checked'>;
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void;
};

type MainProps = AddMainProps | EditMainProps;

export const Main: React.FC<MainProps> = (props) => {

    //Переменная определяющая находится ли пользователь в режиме редактирования таска или нет
    const isEdit = props.mode === 'edit';
    
    // Стейт таска
    const [todo, setTodo] = React.useState(isEdit ? props.editTodo : item);

    // Редактирвоание информации в таске
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTodo({...todo, [name]: value })
    };

    // Добавление или редактирование таска по клику
    const onClick = () => {
        if(isEdit){
            return props.changeTodo({
                name: todo.name,
                description: todo.description,
            })
        }

        props.addTodo({
            name: todo.name,
            description: todo.description,
        });
        setTodo(item); // Скидываем значения инпут по дефолту
    };

    return (
        
        <section className='main'>
            <div className="add-item">
                <div className="name-item">
                    <label htmlFor="name" className="name-item__container">
                        <input 
                            type="text" 
                            className="name-item__input" 
                            id='name' 
                            value={todo.name} 
                            name='name' 
                            onChange={onChange}
                            placeholder = "Task's name" 
                        />
                    </label>
                </div>
                <div className="description-item">
                    <label htmlFor="description" className="description-item__container">
                        <input 
                            type="textarea" 
                            className="description-item__input" 
                            id='description' 
                            value={todo.description} 
                            name='description' 
                            onChange={onChange}
                            placeholder = "Task's description" 
                        />
                    </label>
                </div>
                {
                    isEdit 
                    
                    ? 
                    
                    <Button 
                        color={"green"}
                        onClick={onClick}
                    >
                        ✎
                    </Button>

                    :

                    <Button
                        onClick={onClick} 
                        color={"black"}                
                    >
                    +
                    </Button>
                }    
            </div>
        </section>
        
    );
};