import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'home', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'contact', component: ContactComponent},
            {path: '', component: HomeComponent},
            {path: '**', redirectTo: 'home', pathMatch: 'full'},
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}


