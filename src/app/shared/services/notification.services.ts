import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { NOTIFICATION_MESSAGES, toastType } from '../constants/notification.constants';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    constructor(public snackBar: MatSnackBar, private toastr: ToastrService) {}

    openSnackBar(message: string, panelClass: string) {
        console.log('Showing snackbar', this.snackBar);
        this.snackBar.openFromComponent(SnackbarComponent, {
            data: message,
            panelClass: panelClass,
            duration: 20000
        });
    }

    openToast(type: toastType, message?: string, title?: string) {
        switch (type) {
            case toastType.DEFAULT_ERROR:
                this.toastr.error(NOTIFICATION_MESSAGES[toastType.DEFAULT_ERROR]);
                break;
            case toastType.DEFAULT_SUCCESS:
                this.toastr.success(NOTIFICATION_MESSAGES[toastType.DEFAULT_SUCCESS]);
                break;
            case toastType.ERROR_MESSAGE:
                this.toastr.error(message, title);
                break;
            case toastType.SUCCESS_MESSAGE:
                this.toastr.success(message, title);
                break;
            default:
                break;
        }
    }
}
