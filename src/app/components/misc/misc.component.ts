import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'asp-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {

  constructor() { }

  categories: Array<Category> = [{
    title: "Short Samples",
    media: [{
      title: "Character theme",
      key: "f93DAd3on2U"
    },
    {
      title: "In search",
      key: "CZk5QY2BN0o"
    },
    {
      title: "Thriller",
      key: "BO3hPtOkL7Q"
    },
    {
      title: "Defeated",
      key: "Io91QKq3xzY"
    },
    {
      title: "Nostalgia",
      key: "K_aClf0IcKg"
    }
    ]
  }];

  ngOnInit(): void {
  }

}
