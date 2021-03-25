import { Injectable } from  '@angular/core';
import { Photo } from '../../app-core/models/models';

@Injectable({
    providedIn:  'root'
})

export class PhotoService{
  photos: Photo[] = [];

  constructor(){
    fetch('https://jsonplaceholder.typicode.com/photos').then(res => {
      res.json().then(data => {
          data.forEach(el => {
            this.photos.push(new Photo(el.albumId, el.id, el.title, el.url, el.thumbnailUrl))
          })
        })
    })
  }

  getPhotos(){
    return this.photos;
  }
}