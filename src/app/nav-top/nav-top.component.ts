import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  constructor(private _router: Router) { 

  }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('user')
    this._router.navigate(['/'])
    //con '/' lo regresa a home, es decir la pagina principal, que es el login
  }
}
