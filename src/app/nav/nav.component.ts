import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navItems = [
    {name: 'Dashboard', icon: 'fa fa-tachometer'},
    {name: 'News', icon: 'fa fa-feed'},
    {name: 'Chat Care', icon: 'fa fa-comments'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
