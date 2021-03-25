import { Component } from '@angular/core';
import { Photo } from '../../app-core/models/models';
import { PhotoService } from '../../app-core/services/photos.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [ './gallery.component.css' ]
})

export class GalleryComponent {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService){}

  ngOnInit(){
    this.photos = this.photoService.getPhotos();
  }

  showFullSizeImage(photo: Photo){
    window.open(photo.url)
  }
}
