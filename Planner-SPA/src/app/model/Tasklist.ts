import { Task } from './Task';

export interface Tasklist {
    id?: number;
    name: string;
    tasks?: Task[];
    // checkListMode: boolean;
}