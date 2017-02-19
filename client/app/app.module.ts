import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { MaterialModule }        from '@angular/material';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule }       from './home/home.module';
import { AboutModule }      from './about/about.module';
import { NavBarComponent }  from './nav-bar/nav-bar.component';
import { ScavngrCommonModule }     from './common/scavngr-common.module';

@NgModule({
  imports:      [ MaterialModule, BrowserModule, AppRoutingModule, HomeModule, AboutModule, ScavngrCommonModule ],
  declarations: [ AppComponent, NavBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
