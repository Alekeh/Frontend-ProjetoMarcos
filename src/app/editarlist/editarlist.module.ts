import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {EditarlistRoutingModule} from './editarlist-routing.module';
import {EditarlistPage} from './editarlist.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditarlistRoutingModule
    ],
    declarations: [EditarlistPage]
})


export class EditarlistModule {
}
