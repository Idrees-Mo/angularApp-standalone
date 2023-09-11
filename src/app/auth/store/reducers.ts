import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { authActions } from './actions';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  backendErrors: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,

    // Register user
    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true,
      backendErrors: null,
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.registerFail, (state, action) => ({
      ...state,
      isSubmitting: false,
      backendErrors: action.errors,
    })),

    // Login user
    on(authActions.login, (state) => ({
      ...state,
      isSubmitting: true,
      backendErrors: null,
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.loginFail, (state, action) => ({
      ...state,
      isSubmitting: false,
      backendErrors: action.errors,
    })),

    // Get Current User
    on(authActions.getCurrentUser, (state) => ({
      ...state,
      isLoading: true,
      backendErrors: null,
    })),
    on(authActions.getCurrentUserSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
    })),
    on(authActions.getCurrentUserFail, (state) => ({
      ...state,
      currentUser: null,
      isLoading: false,
      backendErrors: null,
    })),

    // Redirect
    on(routerNavigatedAction, (state) => ({
      ...state,
      backendErrors: null,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectBackendErrors,
} = authFeature;
