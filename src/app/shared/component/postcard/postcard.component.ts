import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../model/posts';
import { postArr } from '../../const/posts';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent implements OnInit {
postData:Array<Ipost>= []
  constructor() { }

  ngOnInit(): void {
    this.postData = postArr;
  }

}
