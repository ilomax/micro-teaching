import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { LexiluComponent } from './lexilu/lexilu.component';
import { JourneyComponent } from './journey/journey.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggedinComponent,
    LexiluComponent,
    JourneyComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
