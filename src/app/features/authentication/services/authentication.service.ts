import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../../../shared/types/api-response.interface';
import { User } from '../../access-management/types/user.interface';
import { IAuthentication } from '../types/authentication.interface';
import { AuthenticatonServiceInterface } from './authenticaton-service-interface';

@Injectable()
export class AuthenticationService implements AuthenticatonServiceInterface {
    constructor(private http: HttpClient) {}

    signIn(payload: IAuthentication): Observable<{ user: User; token: string }> {
        return this.http.post(`${environment.baseUrl}/auth`, payload).pipe(map((response: ApiResponse) => response.data));
    }
}
