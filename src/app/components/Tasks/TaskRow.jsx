"use strict";
var React = require("react");
exports.TaskRow = function (props) {
    return (<tr>
            <td><span>{props.task.id}</span></td>
            <td><span>{props.task.userId}</span></td>
            <td><span>{props.task.start}</span></td>
            <td><span>{props.task.end}</span></td>
        </tr>);
};
