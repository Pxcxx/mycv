import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Certificate {
  title?: string;
  issuer?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private firestore: AngularFirestore) { }

  getCertificates(): Observable<Certificate[]> {
    return this.firestore.collection<Certificate>('certificates').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => action.payload.doc.data() as Certificate);
      })
    );
  }
}
