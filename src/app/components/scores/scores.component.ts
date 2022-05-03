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
      title: "The Search | Munnudi | Educational Short Film",
      key: "mO-95wGMsKY"
    },
    {
      title: "Koonur Times | Timlapse of Landscapes",
      key: "KPMDuNCBdyU"
    }
    ]
  },
  {
    title: "Drama",
    media: [{
      title: "Raja Rani | Flora & Fauna | Kannada Short Film",
      key: "5w4rWyzBJFU"
    }]
  },
  {
    title: "Horror",
    media: [{
      title: "The Room | Kripalwood",
      key: "_LUP7q5fgZg"
    }]
  }
  ];

  ngOnInit(): void {
  }

}
