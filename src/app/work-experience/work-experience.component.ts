import { Component, OnInit } from '@angular/core';
import { WorkExperienceService, WorkExperience } from '../services/work-experience-service/work-experience.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit {
  workExperiences$: Observable<WorkExperience[]>;

  constructor(public workExperienceService: WorkExperienceService) {
    this.workExperiences$ = this.workExperienceService.getWorkExperiences();
  }

  ngOnInit(): void {
  }
}
