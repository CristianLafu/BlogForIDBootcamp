import { Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';

export const routes: Routes = [
    { path: '', component: FormularioComponent},
    { path: 'NBlog', component: FormularioComponent },
    { path: 'BlogList', component: ListaPostsComponent },
];
