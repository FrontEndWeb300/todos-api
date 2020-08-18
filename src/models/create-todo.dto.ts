import { ApiProperty } from "@nestjs/swagger";

export class CreateTodoDto {
    @ApiProperty()
    name: string;
    @ApiProperty()

    project?: string;
    @ApiProperty()

    dueDate?: string;
    @ApiProperty()

    completed: boolean;
}