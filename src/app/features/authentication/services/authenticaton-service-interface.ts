import { Observable } from 'rxjs';
import { IAuthenticationResponse } from '../types/authentication-response.interface';
import { IAuthentication } from '../types/authentication.interface';

export interface AuthenticatonServiceInterface {
    signIn(payload: IAuthentication): Observable<IAuthenticationResponse>;
}
