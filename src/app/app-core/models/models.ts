export class Post{
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(userId: number, id: number, title: string, body: string){
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export class Photo{
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(albumId: number, id: number, title: string, url: string, thumbnailUrl: string){
    this.albumId = albumId;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }
}