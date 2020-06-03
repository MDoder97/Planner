import { User } from './User';

export interface Task {
    id?: number;
    description: string;
    inputMode: boolean;
    complete: boolean;
    // position: number;
    // createdDate: Date;
    dueDate?: Date;
    // assignee?: User;
    subtasks?: Task[];
}