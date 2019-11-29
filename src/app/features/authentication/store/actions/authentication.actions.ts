import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { User } from '../../../access-management/types/user.interface';
import { IAuthentication } from '../../types/authentication.interface';

export const signIn = createAction('[Authentication] Sign in', props<IAuthentication>());
export const signInFail = createAction('[Authentication] Sign in fail', props<{ error: HttpErrorResponse }>());
export const signInSuccess = createAction('[Authentication] Sign in success', props<{ user: User; token: string }>());
