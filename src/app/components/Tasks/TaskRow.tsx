import * as React from 'react';
import {Task} from '../../models/Task';

export const TaskRow = (props: {task: Task}) => {
    return(
        <tr>
            <td><span>{props.task.id}</span></td>
            <td><span>{props.task.userId}</span></td>
            <td><span>{props.task.start}</span></td>
            <td><span>{props.task.end}</span></td>
        </tr>
    );
};
