import {
  // createAction,
  createActionGroup,
  props,
} from '@ngrx/store';

import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendError.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Success': props<{ currentUser: CurrentUserInterface }>(),
    'Register Fail': props<{ errors: BackendErrorsInterface }>(),
    Login: props<{ request: LoginRequestInterface }>(),
    'Login Success': props<{ currentUser: CurrentUserInterface }>(),
    'Login Fail': props<{ errors: BackendErrorsInterface }>(),
  },
});

// **********  The above group of actions is same as below  **********

// export const register = createAction(
//   '[Auth] Register',
//   props<{ request: RegisterRequestInterface }>()
// );

// export const registerSuccess = createAction(
//   '[Auth] Register Succes',
//   props<{ request: RegisterRequestInterface }>()
// );

// export const registerFail = createAction(
//   '[Auth] Register Fail',
//   props<{ request: RegisterRequestInterface }>()
// );
