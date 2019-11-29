import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    handleError(error) {
        console.error('Global', error);
    }
}

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            // Retry one or more time the HTTP call
            retry(1),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // refresh token
                } else {
                    return throwError(error);
                }
            })
        );
    }
}
