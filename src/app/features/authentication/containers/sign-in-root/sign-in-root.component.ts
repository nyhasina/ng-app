import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/core/store/reducers/app.reducers';
import { QuestionBase } from '../../../../shared/types/question-base.class';
import { TextBoxQuestion } from '../../../../shared/types/text-box-question.class';
import { signIn } from '../../store/actions/authentication.actions';
import { getSignInError } from '../../store/selectors/authentication.selectors';
import { IAuthentication } from '../../types/authentication.interface';

@Component({
    selector: 'app-sign-in-root',
    templateUrl: './sign-in-root.component.html',
    styleUrls: ['./sign-in-root.component.scss']
})
export class SignInRootComponent implements OnInit {
    questions: QuestionBase<any>[];
    signInError$: Observable<any>;

    constructor(private authenticationStore: Store<State>) {}

    ngOnInit() {
        this.questions = [
            new TextBoxQuestion({
                type: 'text',
                key: 'userName',
                label: 'User name',
                required: true,
                order: 1
            }),
            new TextBoxQuestion({
                type: 'password',
                key: 'password',
                label: 'Password',
                required: true,
                order: 2
            })
        ];
        this.signInError$ = this.authenticationStore.pipe(select(getSignInError));
    }

    onSave(payload: IAuthentication) {
        this.authenticationStore.dispatch(signIn(payload));
    }
}
