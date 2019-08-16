import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../../features/access-management/types/user.interface';

@Injectable()
export class InMemoryDBService implements InMemoryDbService {
    createDb(): {} {
        const users: User[] = [
            {
                id: 1,
                userName: 'nyhasinavalona',
                password: 'password'
            }
        ];
        return { users };
    }
}
