import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SnackBarOverviewExample } from './snack-bar-overview-example';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [SnackBarOverviewExample],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ClipboardModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [SnackBarOverviewExample],
})
export class AppModule {}
