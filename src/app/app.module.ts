import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCircularMenuModule } from 'ngx-circular-menu';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCircularMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
