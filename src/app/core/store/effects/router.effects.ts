import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_CANCEL, ROUTER_NAVIGATED, ROUTER_REQUEST } from '@ngrx/router-store';
import { tap } from 'rxjs/operators';
import { LoaderService } from '../../../shared/services/loader.service';
import { back, forward, go } from '../actions/router.actions';

@Injectable()
export class RouterEffects {
    go$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(go),
                tap((action) =>
                    this.router.navigate(action.path, {
                        queryParams: action.queryParams,
                        ...action.extras
                    })
                )
            ),
        { dispatch: false }
    );

    back$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(back),
                tap(() => this.location.back())
            ),
        { dispatch: false }
    );

    forward$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(forward),
                tap(() => this.location.forward())
            ),
        { dispatch: false }
    );

    navigation$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ROUTER_REQUEST),
                tap(() => this.loaderService.show())
            ),
        { dispatch: false }
    );

    navigated$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(ROUTER_NAVIGATED || ROUTER_CANCEL),
                tap(() => this.loaderService.hide())
            ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location,
        private loaderService: LoaderService
    ) {}
}
