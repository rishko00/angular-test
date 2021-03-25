import { Injectable } from  '@angular/core';
import { Post } from '../../app-core/models/models';

@Injectable({
    providedIn:  'root'
})

export class PostsService{
  posts: Post[] = [];

  constructor(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
      res.json().then(data => {
          data.forEach(el => {
            this.posts.push(new Post(el.userId, el.id, el.title, el.body))
          })
        })
    })
  }

  getPosts(){
    return this.posts;
  }

  addPost(post: Post){
    this.posts.push(post);
  }

  deletePost(post: Post){
    let index = this.posts.findIndex(el => el.id == post.id);
    this.posts.splice(index, 1);
  }
}