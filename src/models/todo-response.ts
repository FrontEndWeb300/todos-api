export class TodoResponse {
    id: string;
    name: string;
    project?: string;
    dueDate?: string;
    completed: boolean;
}