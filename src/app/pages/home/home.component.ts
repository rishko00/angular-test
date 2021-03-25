import { Component } from '@angular/core';
import { Post, Photo } from '../../app-core/models/models';
import { PostsService } from '../../app-core/services/posts.service';
import { PhotoService } from '../../app-core/services/photos.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})

export class HomeComponent {
  posts: Post[] = [];
  photos: Photo[] = [];

  constructor(private postService: PostsService, private photoService: PhotoService){}

  ngOnInit(){
    this.posts = this.postService.getPosts();
    this.photos = this.photoService.getPhotos();
  }

  showFullSizeImage(photo: Photo){
    window.open(photo.url)
  }
}
