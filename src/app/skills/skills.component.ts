import { Component, OnInit } from '@angular/core';
import { SkillsService, Skill } from '../services/skills-service/skills.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills$: Observable<Skill[]>;

  constructor(public skillsService: SkillsService) {
    this.skills$ = this.skillsService.getSkills();
  }

  ngOnInit(): void {
  }
}
