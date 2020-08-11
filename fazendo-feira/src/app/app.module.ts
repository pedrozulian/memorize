import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Module of Material Design */
import { MaterialModule } from './material/material.module';

/* Module of Core */
import { CoreModule } from './core/core.module';

/* Module of Presentation */
import { PresentationModule } from './presentation/presentation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    PresentationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
