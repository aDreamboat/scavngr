import { Component, OnInit }    from '@angular/core';

import { User }                 from '../user';

@Component({
    selector: 'avatar',
    templateUrl: '/app/common/avatar/avatar.component.html'
})
export class AvatarComponent implements OnInit {
    constructor() { 
        
    }
    
    ngOnInit() {
        //user = new User(1, 'Kevin', 'https://cdn.pixabay.com/photo/2016/09/01/08/25/smiley-1635465_960_720.png');
    }

    user = new User(1, 'Kevin', 'https://cdn.pixabay.com/photo/2016/09/01/08/25/smiley-1635465_960_720.png');
}