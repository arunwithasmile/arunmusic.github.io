import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'asp-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  constructor() { }

  categories: Array<Category> = [{
    title: "Life",
    media: [{
      title: "Kannada Nadu | Spashta Theatre",
      key: "oGbP7-v46Ws"
    },
    {
      title: "Bindu | Story of a Cell",
      key: "rCAyhkzvP4U"
    },
    {
      title: "Mareyade Kshamisu Mareyadare",
      key: "tjNKxAdht04",
      zoom: 124
    }
    ]
  },
  {
    title: "Party / DJ",
    media: [{
      title: "Hangover | Kannada Single",
      key: "tHV9x43a1K4",
      zoom: 90
    }]
  },
  {
    title: "Horror",
    media: [{
      title: "Chaara | Dodmane Combines",
      key: "sDH27koNc_c",
      startAt: 203
    }]
  }
  ];

  ngOnInit(): void {
  }

}
