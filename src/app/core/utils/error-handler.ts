import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/services/notification.services';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private toastr: ToastrService) {}

    handleError(error) {
        console.error('Global Error', error);
        this.toastr.error(error, 'Toastr fun!');
    }
}

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService, private notificationService: NotificationService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            // // Retry one or more time the HTTP call
            tap((event) => {
                if (event instanceof HttpResponse) {
                    console.log('All looks good');
                    console.log(event);
                }
            }),
            catchError((error: any) => {
                if (error instanceof HttpErrorResponse) {
                    console.error('Http error');
                    // this.toastr.success('Error world!', 'Toastr fun!');
                    this.notificationService.openToast();

                    // try {
                    //     this.notificationService.openSnackBar(error.error.message, 'error-message');
                    // } catch (e) {
                    //     this.notificationService.openSnackBar('An error occurred', 'error-message');
                    // }
                }
                return of(error);
            })
            // retry(1),
            // catchError((error: HttpErrorResponse) => {
            //     console.error('Global Http', error);
            //     this.zone.run(() => {
            //         this.notificationService = this.injector.get(NotificationService);

            //     });

            //     if (error.status === 401) {
            //         // refresh token
            //     } else {
            //         return throwError(error);
            //     }
            // })
        );
    }
}
