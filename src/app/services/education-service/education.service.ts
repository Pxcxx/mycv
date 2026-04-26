import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Education {
  institution?: string;
  degree?: string;
  startYear?: string;
  endYear?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private firestore: AngularFirestore) { }

  getEducations(): Observable<Education[]> {
    return this.firestore.collection<Education>('education').snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => action.payload.doc.data() as Education);
      })
    );
  }
}
