import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyboardsListComponent } from './pages/keyboards-list/keyboards-list.component';
import { MiceListComponent } from './pages/mice-list/mice-list.component';
import { TableDataComponent } from './reusable/components/table-data/table-data.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardsListComponent,
    MiceListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableDataComponent,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
