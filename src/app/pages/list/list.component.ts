import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    listData:Object;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getListData();
  }

    getListData(){
      this.api.getData().subscribe((data) =>{
        this.listData = data.data.models;

      })
    }
}
