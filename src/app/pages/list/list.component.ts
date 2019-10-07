import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    listData:Object;
    sortingId: String;
    sortingValue: String;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getListData();
    this.sortingValue = "ASC";
    this.sortingId = "user_id";
  }

//Method for get data show on table
    getListData(){
      try{
        this.api.getData().subscribe((data) =>{
          //this.sortingId = data.data.sorting_creteria.applicant_id;
          this.listData = data.data.application_list;


        })
      }catch(err){
        console.log(err);
      }
    }

//Method for get sort value(ASC/DESC)
  sortValue(value:String){
    try{
    if(this.sortingValue === value){
      this.sortingValue = value;
    }else{
      this.sortingValue = value;
      this.commonSortApi();
      }
    }
    catch(err){
      console.log(err);
    }
  }

//Method for get sorting id value
    sortId(value:String){
      try{
        if(this.sortingId === value){
          this.sortingId = value;
        }else{
          this.sortingId = value;
          this.commonSortApi();
        }
      }catch(err){
      }
    }

//Common method for sorting data according to sorting value, sorting Id
  commonSortApi(){
    try{
    this.api.sortData(this.sortingId,this.sortingValue).subscribe((data)=>{
      this.listData = data.data.models;
    })
  }
  catch(err){
    console.log(err);
  }
  }
}
