import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/usuario.interface';
import { BlogServices } from '../../services/blog.service';

@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [],
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})

export class ListaPostsComponent {

  @Input() arrPosts: Post[] = [];
  filteredPosts: Post[] = [];
  arrCategorias: string[] = [];
  selectedCategoria: string = 'todas';

  constructor(private router: Router, private blogService: BlogServices) { }
  
  ngOnInit(): void {
    this.arrPosts = this.blogService.getAll();
    console.log(this.arrPosts)
    this.filteredPosts = this.arrPosts;
    this.arrCategorias = this.getUniqueCategories();
  }

  onChange(event: any): void {
    const categoria = event.target.value;
    if (categoria === 'todas') {
      this.filteredPosts = this.arrPosts;
    } else {
      this.filteredPosts = this.blogService.getByCategoria(categoria);
    }
  }

  getUniqueCategories(): string[] {
    return Array.from(new Set(this.arrPosts.map(post => post.categoria)));
  }

  onClick(url: string) {
    this.router.navigateByUrl(url);
  }
}