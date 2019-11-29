import { Role } from './role.interface';

export interface User {
    _id?: any;
    userName?: string;
    password?: string;
    email: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    role?: Role;
}
