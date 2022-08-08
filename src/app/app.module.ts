import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { LevelComponent } from './level/level.component';
import { DesiredAmountComponent } from './level/desired-amount/desired-amount.component';
import { ValidationAmountComponent } from './level/validation-amount/validation-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    DesiredAmountComponent,
    ValidationAmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
