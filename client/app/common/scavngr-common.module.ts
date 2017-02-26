import { NgModule }          from '@angular/core';
import {CommonModule} from "@angular/common";
import { MaterialModule } from "@angular/material";

import { AvatarComponent }   from './avatar/avatar.component';

@NgModule({
    imports: [ MaterialModule ],
    exports: [ AvatarComponent ],
    declarations:  [ AvatarComponent ],
    providers: [],
})
export class ScavngrCommonModule { }
