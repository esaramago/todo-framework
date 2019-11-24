import { Component, Input } from '@angular/core';

@Component({
    selector: 'list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
    private _content = '';

    @Input()
    set content(content: string) {
        this._content = content;
    }

    get content(): string { return this._content; }

    isDone = 'logo';
    id = 'logo';

    share() {
        window.alert('The product has been shared!');
    }
}