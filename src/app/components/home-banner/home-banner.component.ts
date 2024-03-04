import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home-banner',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.css',
})
export class HomeBannerComponent {
  heroSectionData: {
    image: string;
    mainHeadline: string;
    subHeadline: string;
    isActive: boolean;
    button1?: {
      title: string;
      route: string;
    };
    button2?: {
      title: string;
      route: string;
    };
  }[] = [
      {
        image: '../../../assets/pic2.png',
        mainHeadline:
          '<h1>All Around Egypt in your <span style="color:#9CE0B2;">pocket</span> </h1>',
        subHeadline: 'new unified card for every egyptian citizen',
        isActive: true,
      },
      {
        image: '../../../assets/pic1.png',
        mainHeadline:
          '<h1>Reserve All Kinds Of <span style="color:#9CE0B2;">Subway</span> Tickets</h1>',
        subHeadline: 'or use our integrated maps as a guide to your destination',
        isActive: false,
        button1: { title: 'Metro Guide', route: '' },
        button2: { title: 'Metro Tickets', route: '' },
      },
      {
        image: '../../../assets/pic3.png',
        mainHeadline:
          '<h1>Find Your Way Through <span style="color:#9CE0B2;">Egypt</span></h1>',
        subHeadline: 'provide multiple plans for your destination',
        isActive: false,
        button1: { title: 'Guide Map', route: '' },
      },
      {
        image: '../../../assets/pic4.png',
        mainHeadline: '<h1>Find a suitable bus for your trip</h1>',
        subHeadline: 'provide multiple plans for your destination',
        button1: { title: 'Bus Guide', route: '' },
        isActive: false,
        button2: { title: 'Bus Tickets', route: '' },
      },
    ];
  responsiveOptions!: {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
  }[];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    // setInterval(() => {
    //   this.nextSlide()
    // }, 3000);
  }

  nextSlide() {
    let indexOfSlider = this.heroSectionData.findIndex((item) => item.isActive);
    console.log(indexOfSlider);
    if (indexOfSlider >= this.heroSectionData.length - 1) {
      console.log('hello');
      this.heroSectionData[indexOfSlider].isActive = false;

      indexOfSlider = 0;

      this.heroSectionData[indexOfSlider].isActive = true;
      return;
    }
    this.heroSectionData[indexOfSlider].isActive = false;
    this.heroSectionData[++indexOfSlider].isActive = true;
  }
  prevSlide() {
    let indexOfSlider = this.heroSectionData.findIndex((item) => item.isActive);
    console.log(indexOfSlider);
    if (indexOfSlider === 0) {
      console.log('hello');
      this.heroSectionData[0].isActive = false;

      indexOfSlider = 4;

      this.heroSectionData[this.heroSectionData.length - 1].isActive = true;
      return;
    }
    this.heroSectionData[indexOfSlider].isActive = false;
    this.heroSectionData[--indexOfSlider].isActive = true;
  }
}
