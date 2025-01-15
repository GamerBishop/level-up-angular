import type { CanActivateFn } from '@angular/router';
import { Roles } from '../enums/roles.enum';

export const isPlayerGuard: CanActivateFn = () => {
  const roles: Roles[] = JSON.parse(window.localStorage.getItem('roles') || "[]") || []

  // Return true for PLAYER or ADMIN because Admin override access level control
  return roles.includes(Roles.PLAYER) || roles.includes(Roles.ADMIN)

};
