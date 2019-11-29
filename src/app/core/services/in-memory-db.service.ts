import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USERS_MOCK } from 'src/app/features/access-management/constants/user.constants';
import { User } from '../../features/access-management/types/user.interface';

@Injectable()
export class InMemoryDBService implements InMemoryDbService {
    createDb(): {} {
        const users: User[] = USERS_MOCK;
        return { users };
    }
}
