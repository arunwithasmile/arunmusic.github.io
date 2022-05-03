import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'asp-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  constructor() { }

  categories: Array<Category> = [{
    title: "Life",
    media: [{
      title: "Mahatma | Musical Video",
      key: "423ctzalM40",
      startAt: 34
    },
    {
      title: "The Search",
      key: "mO-95wGMsKY"
    },
    {
      title: "Koonur Times",
      key: "KPMDuNCBdyU"
    }
    ]
  },
  {
    title: "Drama",
    media: [{
      title: "Raja Rani",
      key: "5w4rWyzBJFU"
    }]
  },
  {
    title: "Horror",
    media: [{
      title: "The Room",
      key: "_LUP7q5fgZg",
      startAt: 203
    }]
  }
  ];

  ngOnInit(): void {
  }

}
