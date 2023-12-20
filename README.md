# BestLoginFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



"compilerOptions": {
// ...
  "noPropertyAccessFromIndexSignature": false,
// ...
}


"BEST-LOGIN-FRONT" is a front-end boiler plate for a login system using Angular v16.2

This login system makes use of certain endpoints being exposed by the backend. These are as follows:
- `${this.serverUrl}/auth/getUsers`
- `${this.serverUrl}/auth/getRoles` //roles have been added just to add onto it in future
- `${this.serverUrl}/auth/addNewUser`,credentials
- `${this.serverUrl}/auth/generateToken`,credentials

A total of 4 routes are there:
- '', hompage
- '/login', redirects to login form
  - loginForm is a template driven form (uses ngModel)
- '/register', redirects to register form
  - registerForm is a Reactive Form
  - all validations have been added using Reactive Forms
- '/dashboard', only logged in user can access ("authguard" has been used to check if the user is logged in, otherwise redirect) 

auth.interceptor has been used to add CORS headers to any request that goes to backend so that CORS errors may not appear.

FUTURE DIRECTIONS:

- As roles are already built in, we can make separate dashboards for separate roles
- Admin Dashboard can have the functionality of CRUD roles, users, menu management etc.
- User Dashboard can have the functionality of reading a list of all users.