import { Component } from '@angular/core';
import { PostsService } from '../../app-core/services/posts.service';
import { Post } from '../../app-core/models/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: [ './posts.component.css' ]
})

export class PostsComponent {
  posts: Post[] = [];

  constructor(private postService: PostsService){}

  ngOnInit(){
    this.posts = this.postService.getPosts()
  }

  addPost(form: NgForm){
    let post = new Post(122, this.posts.length + 1, form.value.title, form.value.body);
    this.postService.addPost(post);
  }

  deletePost(post: Post){
    this.postService.deletePost(post);
  }

  displayUpdateForm(post: Post){
    document.getElementById("updateform" + post.id).style.display = "flex";
  }

  updatePost(form: NgForm, post: Post){
    let updPost = this.posts.find(el => el.id == post.id);
    updPost.title = form.value.title;
    updPost.body = form.value.body;document.getElementById("updateform" + post.id).style.display = "none";
  }
}
