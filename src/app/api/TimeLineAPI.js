"use strict";
var mockTaskData_1 = require("./mockTaskData");
var TimeLineAPI = (function () {
    function TimeLineAPI() {
    }
    /**
     * Get the data
     * @returns {any}
     */
    TimeLineAPI.prototype.getTimeLineByUserId = function () {
        return mockTaskData_1.default;
    };
    return TimeLineAPI;
}());
exports.timeLine = new TimeLineAPI();
