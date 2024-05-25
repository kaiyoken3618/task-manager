import { CanActivateFn } from '@angular/router';

export const taskEditGuard: CanActivateFn = (route, state) => {
  return true;
};
