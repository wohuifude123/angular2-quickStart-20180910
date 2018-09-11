import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>你的人生里 {{name}}</h1>    
    `
})

export class AppComponent {
    name = "@我的世界里";
}