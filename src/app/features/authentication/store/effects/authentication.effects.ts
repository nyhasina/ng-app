import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { go } from '../../../../core/store/actions/router.actions';
import { AuthenticationService } from '../../services/authentication.service';
import { IAuthenticationResponse } from '../../types/authentication-response.interface';
import { signIn, signInFail, signInSuccess } from '../actions/authentication.actions';

@Injectable()
export class AuthenticationEffects {
    signIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(signIn),
            switchMap((action) =>
                this.authenticationService.signIn(action).pipe(
                    map((response: IAuthenticationResponse) => signInSuccess(response)),
                    catchError((error) => of(signInFail({ error })))
                )
            )
        )
    );

    signInSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(signInSuccess),
            map(() => go({ path: ['/home'] }))
        )
    );

    constructor(private actions$: Actions, private authenticationService: AuthenticationService, private router: Router) {}
}
