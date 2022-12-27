import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//* NgRx
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';

import { contadorReducer } from './contador/contador.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer }), //* { contador: contadorReducer }, estructura que tiene el STORE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
