import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { NgbModule }          from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent }          from './home.component';
import { HomeRoutingModule }      from './home-routing.module';
import { ScavngrCommonModule }    from './../common/scavngr-common.module'
import { ProfileBadgeComponent }  from './profile-badge.component';
//import { AvatarComponent }        from './../common/avatar/avatar.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HomeRoutingModule,
    ScavngrCommonModule
  ],
  declarations: [
    HomeComponent,
    ProfileBadgeComponent
  ],
  providers: [

  ]
})
export class HomeModule {}
