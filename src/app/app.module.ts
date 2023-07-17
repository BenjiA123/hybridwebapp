import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsComponent } from './util/inputs/inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthInterceptor } from './auth/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [
    CookieService
    , {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true

    },],
  bootstrap: [AppComponent],
  entryComponents: [DialogMessageComponent]
})
export class AppModule { }
