import { AUTH_ROUTES } from './auth/auth.routes';
import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';

const APP_ROUTER: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full'},
    { path: 'messages', component: MessagesComponent},
    { path: 'auth', component: AuthenticationComponent, children:AUTH_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTER);
