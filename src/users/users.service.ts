import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'bob',
                password: 'wordpass',
            },
            {
                userId: 2,
                username: 'sue',
                password: 'wordpass',
            },
            {
                userId: 3,
                username: 'maria',
                password: 'wordpass',
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}