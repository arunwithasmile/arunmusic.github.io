import { Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/app/models/media';

@Component({
  selector: 'asp-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor() { }

  @Input() title = 'Life';
  @Input() media: Array<Media> = [];

  ngOnInit(): void {
  }

}
