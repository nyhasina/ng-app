import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../features/authentication/authentication.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store/reducers/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDBService } from './services/in-memory-db.service';
import { HomeComponent } from './containers/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
    declarations: [HomeComponent, HeaderComponent, SidenavComponent],
    imports: [
        CommonModule,
        CoreRoutingModule,
        AuthenticationModule,
        HttpClientModule,
        environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDBService),
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        StoreRouterConnectingModule.forRoot()
    ],
    providers: []
})
export class CoreModule {
}
