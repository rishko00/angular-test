import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostsComponent } from './pages/posts/posts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsService } from './app-core/services/posts.service';
import { PhotoService } from './app-core/services/photos.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'contactus', component: ContactComponent },
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes), ReactiveFormsModule ],
  declarations: [ AppComponent, HomeComponent, PostsComponent, GalleryComponent, ContactComponent ],
  providers: [ PostsService, PhotoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
