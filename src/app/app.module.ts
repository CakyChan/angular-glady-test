import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { LevelComponent } from './level/level.component';

import { DesiredAmount1Component } from './tools/desired-amount1/desired-amount1.component';
import { DesiredAmount2Component } from './tools/desired-amount2/desired-amount2.component';
import { ValidationAmountComponent } from './tools/validation-amount/validation-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    DesiredAmount1Component,
    DesiredAmount2Component,
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
