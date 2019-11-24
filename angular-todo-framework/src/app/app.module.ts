import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { IconComponent } from './icon/icon.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
    declarations: [
        AppComponent,
        MainHeaderComponent,
        IconComponent,
        ListItemComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
