import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {ServiceComponent} from './service/service.component';
import {AgmCoreModule} from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    AgmCoreModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    FeedbackComponent,
    HomeComponent,
    ServiceComponent
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
