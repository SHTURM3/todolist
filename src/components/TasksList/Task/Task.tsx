import React from "react";

import { Button } from "../../Button/Button";

import './Task.css';

type Todo = {
    id: number;
    name: string;
    description: string;
    checked: boolean;
};

interface  TaskProps {
    task: Todo;
    taskId: Todo['id'] | null;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
    selectTaskIdForEdit: (id: Todo['id']) => void;
};

export const Task: React.FC<TaskProps> = ({task, taskId, checkTodo, deleteTodo, selectTaskIdForEdit}) => {

    return(
        <li className={task.checked ? 'task task_checked' : 'task'}>
            <div className="task__text" onClick={() => checkTodo(task.id)}>
                <h2 className="task__title">
                    {task.name}
                </h2>
                <p className="task__description">
                    {task.description}
                </p>    
            </div>
            <div className="task__btn">
                <Button 
                    color={"green"}
                    onClick={() => selectTaskIdForEdit(task.id)}
                >
                    ✎
                </Button>
                <Button 
                    color={"red"}
                    onClick={() => deleteTodo(task.id)}
                >
                    ✕
                </Button>
            </div>
        </li>
    );
};