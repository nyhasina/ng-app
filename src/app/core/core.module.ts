import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../../environments/environment';
import { AuthenticationModule } from '../features/authentication/authentication.module';
import { AuthenticationEffects } from '../features/authentication/store/effects/authentication.effects';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeRootComponent } from './containers/home-root/home-root.component';
import { CoreRoutingModule } from './core-routing.module';
import { InMemoryDBService } from './services/in-memory-db.service';
import { RouterEffects } from './store/effects/router.effects';
import { metaReducers, reducers } from './store/reducers/app.reducers';

@NgModule({
    declarations: [HomeRootComponent, HeaderComponent, SidenavComponent],
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
        EffectsModule.forRoot([RouterEffects, AuthenticationEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        StoreRouterConnectingModule.forRoot()
    ],
    providers: []
})
export class CoreModule {}
