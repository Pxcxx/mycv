import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Interest {
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  constructor(private firestore: AngularFirestore) { }

  getInterests(): Observable<Interest[]> {
    return this.firestore.collection<Interest>('interests').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => action.payload.doc.data() as Interest);
      })
    );
  }
}
