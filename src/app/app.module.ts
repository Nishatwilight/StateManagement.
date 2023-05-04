import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterBtnComponent } from './counter-btn/counter-btn.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterBtnComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
