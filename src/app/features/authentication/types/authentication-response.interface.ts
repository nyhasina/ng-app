import { User } from '../../access-management/types/user.interface';

export interface IAuthenticationResponse {
    user: User;
    token: string;
}
