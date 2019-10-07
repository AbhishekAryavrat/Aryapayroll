import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dailyStatus=[];
  pendingData=[];
  notificationsData=[];
  actionItems=[];
  constructor( private api :ApiService) { }

  ngOnInit() {
    this.dashboardData();
  }

  dashboardData(){
    try{
     this.dailyStatus=[];
     this.pendingData=[];
     this.notificationsData=[];
     this.actionItems=[];
      this.api.getDashboardData().subscribe(data=>{
        this.dailyStatus.push( data.data.top_count);
        this.pendingData.push(data.data.onboarding_funnel);
        this.notificationsData = data.data.notifications;
        this.actionItems.push(data.data.onboarding_funnel);
      })
    }catch(err){
      console.log(err.message);
    }
  }

  remove(alertId:String){
    try{
      this.api.deleteNotification(alertId).subscribe(data=>{
        this.dashboardData();
      })
    }catch(err){
      console.log(err.message);
    }
  }

}
