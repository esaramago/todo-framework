import { Component, Input } from '@angular/core';

@Component({
    selector: 'icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.css']
})
export class IconComponent {
    private _icon = '';
    private _size = '';

    @Input()
    set icon(icon: string) {
        this._icon = icon;
    }
    get icon(): string { return this._icon; }

    @Input()
    set size(size: string) {
        this._size = size;
    }
    get size(): string { return this._size; }

    share() {
        window.alert('The product has been shared!');
    }
}