import type { CanActivateFn } from '@angular/router';
import { Roles } from '../enums/roles.enum';

export const isAdminGuard: CanActivateFn = () => {
  const roles: Roles[] = JSON.parse(window.localStorage.getItem('roles') || "[]") || []
  return roles.includes(Roles.ADMIN)
};
