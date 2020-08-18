import { ApiProperty } from "@nestjs/swagger";

export class TodoResponse {
    @ApiProperty()

    id: string;
    @ApiProperty()

    name: string;
    @ApiProperty()

    project?: string;
    @ApiProperty()

    dueDate?: string;
    @ApiProperty()

    completed: boolean;
}