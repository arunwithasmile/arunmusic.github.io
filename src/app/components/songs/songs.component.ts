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
      title: "Kannada Nadu",
      key: "oGbP7-v46Ws"
    },
    {
      title: "Bindu",
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
      title: "Hangover Kannada Song",
      key: "tHV9x43a1K4"
    }]
  },
  {
    title: "Horror",
    media: [{
      title: "Chaara",
      key: "sDH27koNc_c",
      startAt: 203
    }]
  }
  ];

  ngOnInit(): void {
  }

}
