import TasksMockData from './mockTaskData';
import {Task} from '../models/Task';

class TimeLineAPI {
    /**
     * Get the data
     * @returns {any}
     */
    public getTimeLineByUserId(): Array<Task> {
        return TasksMockData;
    }
}

export const timeLine = new TimeLineAPI();
