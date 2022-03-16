import { Component } from "@angular/core";

@Component({
  selector:'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  FirstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565348,
    isFavorite: false
  }

  onMediaItemDelete(mediaItem) {

  }
}
