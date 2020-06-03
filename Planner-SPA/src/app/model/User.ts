import { Tasklist } from './Tasklist';

export interface User {
    id: number;
    username: string;
    email: string;
    tasklists?: Tasklist[];
    // notifications?: Notification[];
}