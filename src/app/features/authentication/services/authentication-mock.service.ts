import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { User } from '../../access-management/types/user.interface';
import { IAuthenticationResponse } from '../types/authentication-response.interface';
import { IAuthentication } from '../types/authentication.interface';
import { AuthenticatonServiceInterface } from './authenticaton-service-interface';

@Injectable()
export class AuthenticationMockService implements AuthenticatonServiceInterface {
    constructor(private http: HttpClient) {}

    signIn(payload: IAuthentication): Observable<IAuthenticationResponse | any> {
        return this.http.get(`${environment.baseUrl}/users`).pipe(
            concatMap((users: User[]) => {
                if (users.some((u) => u.email === payload.email && u.password === payload.password)) {
                    const user = users.find((u) => u.email === payload.email);
                    return of({
                        user,
                        token: 'token'
                    });
                } else {
                    return throwError('Username/Password invalid');
                }
            })
        );
    }
}
