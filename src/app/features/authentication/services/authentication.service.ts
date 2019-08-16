import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../../../shared/types/api-response.interface';
import { AuthenticatonServiceInterface } from './authenticaton-service-interface';

@Injectable()
export class AuthenticationService implements AuthenticatonServiceInterface {
    constructor(private http: HttpClient) {
    }

    signIn(payload: { userName: string, password: string }) {
        return this.http.post(`${ environment.baseUrl }/auth`, payload).pipe(
            map((response: ApiResponse) => response.data)
        );
    }
}
