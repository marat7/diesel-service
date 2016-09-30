import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {HomeComponent} from './home/home.component';
import {ServiceComponent} from './service/service.component';
const appRoutes: Routes = [
    
    { path: 'contact', component: ContactComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: '', component: HomeComponent },
    { path: 'service', component: ServiceComponent }
    
]

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);