import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { NgbModule }            from '@ng-bootstrap/ng-bootstrap';

import { AboutRoutingModule }   from './about-routing.module';
import { AboutComponent }       from './about.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent
  ],
  providers: [

  ]
})
export class AboutModule {}
