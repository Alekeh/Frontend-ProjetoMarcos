import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditarlistPage} from './editarlist.page';

const routes: Routes = [
    {
        path: '',
        component: EditarlistPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EditarlistRoutingModule {
}
