import { Injectable } from "@angular/core";
import { arrPosts } from "../data/blog.db";
import { Post } from "../interfaces/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class BlogServices {

  private arrPosts: Post[] = [];

  constructor() {}

  getAll(): Post[] {
    return this.arrPosts;
  }

  create(article: Post) {
    this.arrPosts.push(article);
  }

  getByCategoria(cat: string): Post[] {
    return this.arrPosts.filter(post => post.categoria === cat);
  }
}

 