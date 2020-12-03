import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExerciciosPage} from './exercicios.page';

const routes: Routes = [
    {
        path: '',
        component: ExerciciosPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExerciciosRoutingModule {
}
