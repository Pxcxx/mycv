import { Component, OnInit } from '@angular/core';
import { LanguagesService, Language } from '../services/languages-service/languages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent implements OnInit {
  languages$: Observable<Language[]>;

  constructor(public languagesService: LanguagesService) {
    this.languages$ = this.languagesService.getLanguages();
  }

  ngOnInit(): void {
  }
}
