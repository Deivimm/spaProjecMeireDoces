import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaDoceria';
  images = [
    {
      imageSrc:
        'assets/carouselImages/img1.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'assets/carouselImages/img2.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'assets/carouselImages/img3.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'assets/carouselImages/img4.jpg',
      imageAlt: 'person2',
    },
    {
      imageSrc:
        'assets/carouselImages/img5.jpg',
      imageAlt: 'person2',
    },
    {
      imageSrc:
        'assets/carouselImages/img6.jpg',
      imageAlt: 'person2',
    },
  ]
}
