import { Component, OnInit } from '@angular/core';
import { InterestsService, Interest } from '../services/interests-service/interests.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent implements OnInit {
  interests$: Observable<Interest[]>;

  constructor(public interestsService: InterestsService) {
    this.interests$ = this.interestsService.getInterests();
  }

  ngOnInit(): void {
  }
}
