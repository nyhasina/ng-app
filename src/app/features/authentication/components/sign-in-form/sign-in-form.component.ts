import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/utils/default.error-matcher';
@Component({
    selector: 'app-sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
    // Implement in abstract class error handling and form initialization
    form: FormGroup;
    matcher = new MyErrorStateMatcher();
    @Output() onsubmit: EventEmitter<any> = new EventEmitter<any>();
    @Input() error: string;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.initForm();
    }

    initForm(auth = { email: '', password: '' }) {
        this.form = this.formBuilder.group({
            email: [auth.email, [Validators.required]],
            password: [auth.password, [Validators.required, Validators.minLength(4)]]
        });
    }

    onSubmit() {
        this.form.valid && this.onsubmit.emit(this.form.value);
    }

    getErrorMessage(formControlName: string, message: '') {
        return this.form.get(formControlName).hasError('required')
            ? 'You must enter a value'
            : this.form.get(formControlName).hasError('email')
            ? `Not a valid ${message || formControlName}`
            : this.form.get(formControlName).hasError('minlength')
            ? `Too short`
            : '';
    }
}
