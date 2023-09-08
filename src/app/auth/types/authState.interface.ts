import { BackendErrorsInterface } from 'src/app/shared/types/backendError.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null | undefined;
  isLoading: boolean;
  backendErrors: BackendErrorsInterface | null;
}
