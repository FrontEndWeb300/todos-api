import { Profile, ProfileBase, AutoMapper, mapFrom } from "nestjsx-automapper";
import { Todo } from "src/schemas/todo";
import { TodoResponse } from "src/models/todo-response";


@Profile()
export class TodoMapper extends ProfileBase {
    constructor(mapper: AutoMapper) {
        super();
        mapper.createMap(Todo, TodoResponse)
            .forMember(dest => dest.id, mapFrom(d => d._id));
    }
}