import React from "react";

import { Main } from "../Main/Main";
import { Task } from "./Task/Task";

import './TaskList.css';

type Todo = {
    id: number;
    name: string;
    description: string;
    checked: boolean;
};

interface TasksListProps {
    tasks: Todo[];
    taskId: Todo['id'] | null;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
    selectTaskIdForEdit: (id: Todo['id']) => void;
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void;
};

export const TasksList: React.FC<TasksListProps> = ({tasks, taskId, checkTodo, deleteTodo, selectTaskIdForEdit, changeTodo}) => {

    return(
        <section className="tasks">
            <ul className='tasks__list'>
                {tasks.map((item) => {

                    if(item.id === taskId) 
                        return (
                            <Main 
                                key={item.id} 
                                mode='edit' 
                                editTodo={{name: item.name, description: item.description}}
                                changeTodo={changeTodo}
                            />
                        );
                    
                    return (
                        <Task
                            key={item.id}
                            task={item}
                            taskId={taskId}
                            checkTodo={checkTodo}
                            deleteTodo={deleteTodo}
                            selectTaskIdForEdit={selectTaskIdForEdit}
                        />
                    );
                })}
            </ul>    
        </section>
        
    );
};
