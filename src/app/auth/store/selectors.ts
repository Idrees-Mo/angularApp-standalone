import { createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';

// Select auth feature
export const selectFeature = (state: { auth: AuthStateInterface }) =>
  state.auth;

//   Select isSubmitting from auth feature
export const selectIsSubmitting = createSelector(
  selectFeature,
  (state) => state.isSubmitting
);
