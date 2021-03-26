import { Component, OnInit } from '@angular/core';
import { blogArticles } from '../blog-articles'
@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles = blogArticles;
  constructor() { }

  ngOnInit(): void {
  }

}
