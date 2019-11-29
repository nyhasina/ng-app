import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignInRootComponent } from './containers/sign-in-root/sign-in-root.component';
import { AuthenticationMockService } from './services/authentication-mock.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
    declarations: [SignInRootComponent, SignInFormComponent],
    imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
    providers: [
        {
            provide: AuthenticationService,
            useClass: environment.production ? AuthenticationService : AuthenticationMockService
        }
    ]
})
export class AuthenticationModule {}
