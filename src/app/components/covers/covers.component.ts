import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'asp-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.scss']
})
export class CoversComponent implements OnInit {

  constructor() { }

  categories: Array<Category> = [{
    title: "Melodious",
    media: [{
      title: "I Love You Maa",
      key: "t-R7Yo9Ge10"
    },
    {
      title: "He Sharade | Instrumental Cover",
      key: "chlnGdBWioY",
      zoom: 117
    }
    ]
  },
  {
    title: "Party / DJ",
    media: [{
      title: "Happy New Year 2019",
      key: "g20LooUvGVo",
      startAt: 19
    },
    {
      title: "Shankar Nag House Trap Mix",
      key: "eSlmdIWztv4"
    }]
  },
  {
    title: "Western",
    media: [{
      title: "Game of Thrones | Instrumental Cover",
      key: "3_58N-3MQ3A"
    }]
  }
  ];

  ngOnInit(): void {
  }

}
