import { Component, OnInit } from '@angular/core';
import { EducationService, Education } from '../services/education-service/education.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educations$: Observable<Education[]>;

  constructor(public educationService: EducationService) {
    this.educations$ = this.educationService.getEducations();
  }

  ngOnInit(): void {
  }
}
