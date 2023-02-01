import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  color = "";
  size = "";
  keyword = "";

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe((params) => {
      this.color = params['color'];
      this.size = params['size'];
      this.keyword = params['keyword'];
    })
  }
}
