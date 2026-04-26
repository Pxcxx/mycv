import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Header {
  name?: string;
  career?: string;
  location?: string;
  email?: string;
  github?: string;
  photoUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private firestore: AngularFirestore) { }

  getHeader(): Observable<Header> {
    return this.firestore.collection<Header>('header').snapshotChanges().pipe(
      map(actions => {
        if (actions.length > 0) {
          return actions[0].payload.doc.data() as Header;
        }
        return {};
      })
    );
  }
}