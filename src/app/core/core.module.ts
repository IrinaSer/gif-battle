import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '@app/core/components/footer/footer.component';
import {HeaderComponent} from '@app/core/components/header/header.component';
import {RouterModule} from '@angular/router';
import {GifService} from '@app/core/services/gif.service';

@NgModule({
    declarations: [FooterComponent, HeaderComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        GifService
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule {
}
