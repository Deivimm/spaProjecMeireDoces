import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images = [
    {
      imageSrc:
        'assets/images/carousel/casamento1.jpeg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'assets/images/carousel/img1.jpg',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'assets/images/carousel/img2.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'assets/images/carousel/img3.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'assets/images/carousel/img4.jpg',
      imageAlt: 'person2',
    },
    {
      imageSrc:
        'assets/images/carousel/img5.jpg',
      imageAlt: 'person2',
    },
    {
      imageSrc:
        'assets/images/carousel/img6.jpg',
      imageAlt: 'person2',
    },
  ]
}
