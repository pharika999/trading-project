import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  custodianid: any;
  password: any;
  custodianData: any = [];
  constructor(private http: HttpClient, private dataSvc: DataService) {
    this.custodianData = this.getData('');

  }

  ngOnInit(): void {
  }
  getData(url:string){
    return this.dataSvc.getDataFromApi('');
  }

}
