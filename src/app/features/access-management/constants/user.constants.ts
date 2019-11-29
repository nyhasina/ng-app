import { User } from '../types/user.interface';

// tslint:disable: no-hardcoded-credentials
export const USERS_MOCK: User[] = [
    {
        _id: '1234',
        email: 'john@mail.com',
        password: 'john',
        firstName: 'John'
    },
    {
        _id: '5678',
        email: 'foo@mail.com',
        password: 'fooo',
        firstName: 'Foo'
    },
    {
        _id: '9101',
        email: 'bar@mail.com',
        password: 'barr',
        firstName: 'Bar'
    },
    {
        _id: '1121',
        email: 'admin',
        password: 'admin',
        firstName: 'Admin'
    }
];
