import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular';
    headericon = 'logo';
    items = [
        {
            id: 1,
            content: "sdcsdcsdc",
            isDone: true
        },
        {
            id: 2,
            content: "wqefwqefqwef",
            isDone: false
        },
        {
            id: 3,
            content: "wefqrfqrf",
            isDone: false
        }
    ];
}
