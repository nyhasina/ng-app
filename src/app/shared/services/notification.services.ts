import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable()
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

    openToast() {
        this.toastr.success('From notification', 'notification');
    }
}
