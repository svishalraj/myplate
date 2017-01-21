"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TimeLineAPI_1 = require("../../api/TimeLineAPI");
var TaskRow_1 = require("./TaskRow");
var Tasks = (function (_super) {
    __extends(Tasks, _super);
    /**
     * Initialize.
     * @param props
     */
    function Tasks(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { tasks: [] };
        return _this;
    }
    Tasks.prototype.componentWillMount = function () {
        this.setState({ tasks: TimeLineAPI_1.timeLine.getTimeLineByUserId() });
    };
    Tasks.prototype.render = function () {
        var rows = [];
        this.state.tasks.map(function (task) {
            rows.push(<TaskRow_1.TaskRow task={task}/>);
        });
        return (<div className="row">
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
            </div>);
    };
    return Tasks;
}(React.Component));
exports.Tasks = Tasks;
