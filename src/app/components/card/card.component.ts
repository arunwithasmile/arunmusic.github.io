import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'asp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  
  @Input() title: string;
  @Input() key: string;
  @Input() zoom?: number = 100;
  @Input() startAt?: number;
  url: string;
  thumb: string;

  ngOnInit(): void {
    this.url = `https://www.youtube.com/watch?v=${this.key}`;
    this.thumb = `https://img.youtube.com/vi/${this.key}/hqdefault.jpg`
    if(this.startAt) {
      this.url += '&t=' + this.startAt;
    }
  }

}
