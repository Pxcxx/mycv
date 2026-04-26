import { Component, OnInit } from '@angular/core';
import { HeaderService, Header } from '../services/header-service/header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  headerData$: Observable<Header>;

  constructor(public headerService: HeaderService) {
    this.headerData$ = this.headerService.getHeader();
  }

  ngOnInit(): void {
  }
}
