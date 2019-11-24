import { Component, Input } from '@angular/core';

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
    iconSize = 'lg';

    private _title = '';
    private _headericon = '';

    @Input()
    set title(title: string) {
        this._title = title;
    }
    get title(): string { return this._title; }

    @Input()
    set headericon(headericon: string) {
        this._headericon = headericon;
    }
    get headericon(): string { return this._headericon; }


    share() {
        window.alert('The product has been shared!');
    }
}