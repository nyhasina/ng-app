import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { toastType } from 'src/app/shared/constants/notification.constants';
import { NotificationService } from 'src/app/shared/services/notification.services';
import { environment } from 'src/environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private notificationService: NotificationService) {}

    handleError(error) {
        !environment.production && console.error('Global', error);
        environment.production
            ? this.notificationService.openToast(toastType.DEFAULT_ERROR)
            : this.notificationService.openToast(toastType.ERROR_MESSAGE, error);
    }
}

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private notificationService: NotificationService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((event) => {}),
            catchError((error: any) => {
                if (error instanceof HttpErrorResponse) {
                    try {
                        this.notificationService.openToast(toastType.ERROR_MESSAGE, error.error.message);
                    } catch (e) {
                        this.notificationService.openToast(toastType.DEFAULT_ERROR);
                    }
                }
                return of(error);
            })
        );
    }
}
