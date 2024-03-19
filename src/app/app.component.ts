import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListaPostsComponent } from './pages/lista-posts/lista-posts.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormularioComponent, ListaPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
