import type { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("Request >> " + req.url)

  return next(req);
};
