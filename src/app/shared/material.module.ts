import { NgModule } from '@angular/core';
import { MatIconModule, MatSnackBarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const modules = [MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSnackBarModule, MatIconModule];
@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule {}
