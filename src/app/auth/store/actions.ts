import {
  // createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';

import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Success': props<{ currentUser: CurrentUserInterface }>(),
    'Register Fail': emptyProps,
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
