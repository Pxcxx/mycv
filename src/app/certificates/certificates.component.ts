import { Component, OnInit } from '@angular/core';
import { CertificatesService, Certificate } from '../services/certificates-service/certificates.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent implements OnInit {
  certificates$: Observable<Certificate[]>;

  constructor(public certificatesService: CertificatesService) {
    this.certificates$ = this.certificatesService.getCertificates();
  }

  ngOnInit(): void {
  }
}
