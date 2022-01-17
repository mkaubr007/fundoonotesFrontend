import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  list: boolean = true;
  toggleView()
  {
    this.list = !this.list;
  }
  opened: boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
