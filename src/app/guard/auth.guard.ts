import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { inject } from '@angular/core';

// Returns a boolean indicating if the user is authenticated. If the user is not authenticated, it will
// redirect them to the login page with a query parameter specifying the URL they were trying to access.
export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService: AuthService = inject(AuthService);
  const isLoggedIn = authService.isAuthenticated();
  const router = new Router()

  if (isLoggedIn) {
    return true
  } else {
    return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }
};
