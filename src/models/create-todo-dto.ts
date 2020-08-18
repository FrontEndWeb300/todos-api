export class CreateTodoDto {
    name: string;
    project?: string;
    dueDate?: string;
    completed: boolean;
}