﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { StudentComponent } from './student';
import { TeacherComponent } from './teacher';
import { KurseComponent } from './kurse/kurse.component';
import { KursetEMiaComponent } from './kurse/kurset-e-mia/kurset-e-mia.component';
import { ZgjidhKursetComponent } from './kurse/zgjidh-kurset/zgjidh-kurset.component';
import { KrijoKurseComponent } from './kurse/krijo-kurse/krijo-kurse.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
    TeacherComponent ,
    KurseComponent ,
    KursetEMiaComponent ,
    ZgjidhKursetComponent ,
    KrijoKurseComponent,
    StudentComponent ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }