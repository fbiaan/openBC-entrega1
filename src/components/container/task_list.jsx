import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example','defaul descrip',false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('todo: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
               <h1> Your TAsk : </h1>
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
