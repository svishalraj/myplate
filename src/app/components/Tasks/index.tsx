import * as React from 'react';
import {timeLine} from '../../api/TimeLineAPI';
import {Task} from '../../models/Task';
import {TaskRow} from './TaskRow';

interface IState {
    tasks: Array<Task>;
}

export class Tasks extends React.Component<{}, IState> {
    /**
     * Initialize.
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }

    public componentWillMount() {
        this.setState({tasks: timeLine.getTimeLineByUserId()});
    }

    public render() {
        let rows = [];
        this.state.tasks.map((task: Task) => {
            rows.push(<TaskRow task={task}/>);
        });
        return(
            <div className="row">
                <h2> Task List </h2>
                <table className="table">
                    <thead>
                      <tr>
                       <th> Id </th>
                       <th> Task Name </th>
                       <th> Start time </th>
                       <th> End time </th>
                      </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}
